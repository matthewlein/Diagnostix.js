Diagnostix = function(opts) {
    this.start = 0;
    this.marks = [];
    this.isDev = opts.isDev();
};

Diagnostix.prototype = {
    
    init : function() {
        this.marks.push('*** Start Diagnostix ***\n');
        this.start = new Date().getTime();
    },
    
    mark : function(message) {
        var now = new Date().getTime();
        this.marks.push( ( now - this.start ) + ': ' + message );
    },
    
    end : function() {
        this.marks.push('\n*** End Diagnostix ***');
        if ( this.isDev ) {
            console.log( this.marks.join('\n') );
        }
    }
    
};