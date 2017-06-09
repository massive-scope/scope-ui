import {observable, computed, asStructure} from 'mobx';
import jquery from 'jquery';

class UiState {
    @observable language = "en_US";
    @observable pendingRequestCount = 0;

    // asStructure makes sure observer won't be signaled only if the
    // dimensions object changed in a deepEqual manner
    @observable windowDimensions = asStructure({
        width: jquery(window).width(),
        height: jquery(window).height()
    });

    constructor() {
        jquery.resize(() => {
            this.windowDimensions = getWindowDimensions();
        });
    }

    @computed get appIsInSync() {
        return this.pendingRequestCount === 0
    }
}

singleton = new UiState();
export default singleton;
