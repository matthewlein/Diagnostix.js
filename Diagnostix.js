Diagnostix = function() {
    this.start = 0;
    this.marks = [];
};

Diagnostix.prototype = {
    
    init : function() {
        this.marks.push('*** Diagnostix ***');
        this.start = new Date().getTime();
    },
    
    mark : function(message) {
        var now = new Date().getTime();
        this.marks.push( ( now - this.start ) + ': ' + message );
    },
    
    end : function() {
        console.log( this.marks.join('\n') );
    }
    
};