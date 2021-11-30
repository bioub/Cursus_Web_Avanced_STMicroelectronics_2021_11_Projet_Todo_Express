import { expect, use } from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

function useCallback(cb: (val: string) => void) {
  cb('TEST');
}

describe('useCallback function', () => {
  // it('should call the callback', () => {
  //   useCallback(() => {
  //     expect(true).to.be.true;
  //   });
  // });
  it('should call the callback', () => {
    const spy = sinon.spy();
    useCallback(spy);

    expect(spy).to.have.been.called;
    expect(spy).to.have.been.calledOnce;
    expect(spy).to.have.been.calledWith('TEST');
  });
});
