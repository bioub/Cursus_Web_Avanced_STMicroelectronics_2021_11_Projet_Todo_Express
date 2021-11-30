import { expect } from 'chai';
import sinon, { SinonFakeTimers } from 'sinon';

function httpClient(url: string) {
  const data: any = {
    '/users': [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ],
    '/todos': [
      { id: 1, title: 'Pain', userId: 2 },
      { id: 2, title: 'Lait', userId: 1 },
    ],
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data[url]) {
        resolve(data[url]);
      } else {
        reject(new Error('no data for this url'));
      }
    }, Math.random() * 1000);
  });
}

describe('httpClient function', () => {
  let fakeTimer: SinonFakeTimers;
  beforeEach(() => {
    fakeTimer = sinon.useFakeTimers(); // globalThis.setTimeout = () => {}
  });
  afterEach(() => {
    fakeTimer.restore(); //  globalThis.setTimeout = originalSetTimeout;
  });
  it('should resolve a value when the url exists', async () => {
    const promise = httpClient('/users');
    fakeTimer.tick(1000);
    const users = await promise;
    expect(users).to.deep.equals([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ]);
  });
  // it('should resolve a value when the url exists', (done) => {
  //   httpClient('/users').then((users) => {
  //     expect(users).to.deep.equals([
  //       { id: 1, name: 'A' },
  //       { id: 2, name: 'B' },
  //     ]);
  //     done();
  //   });
  // });
});
