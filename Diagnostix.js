Diagnostix = function() {
    this.start = 0;
    this.marks = [];
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
        console.log( this.marks.join('\n') );
    }
    
};