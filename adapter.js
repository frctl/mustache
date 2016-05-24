'use strict';

const Adapter  = require('@frctl/fractal').Adapter;

class MustacheAdapter extends Adapter {

    render(path, str, context, meta) {
        let views = {};
        this.views.forEach(view => (views[view.handle] = view.content));
        return Promise.resolve(this.engine.render(str, context, views));
    }

}

module.exports = function() {

    return {

        register(source, app) {
            return new MustacheAdapter(require('mustache'), source);
        }
    }

};
