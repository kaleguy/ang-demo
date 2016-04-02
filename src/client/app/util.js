/**
 * Created by josephorr on 3/20/16.
 */
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
/**
 * removeTags: strip html tags from string
 * @param string
 * @returns {*}
 */
function removeTags(string){
    if (! string){return ''}
    return string.replace(/<[^>]*>/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
}
/**
 * setAll utility function to set all keys of an object to the same value
 * @param obj
 * @param value
 */
function setAll(obj, value){
    _.each(obj,function(v,k){obj[k] = value})
}

/**
 * Convert hyphenated to camelCase
 * @param string
 * @returns {XML}
 */
function camelize(string) {
    string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.replace(/^([A-Z])/, function (match, chr) {
        return chr ? chr.toLowerCase() : '';
    });
}

