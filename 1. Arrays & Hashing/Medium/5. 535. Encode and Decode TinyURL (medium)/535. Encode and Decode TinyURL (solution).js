const urls = [];

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
function encode(longUrl) {
  urls.push(longUrl);    
  return 'http://tiny.url/' + (urls.length - 1);
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
function decode(shortUrl) {
  const i = Number(shortUrl.split('/').at(-1)); 
  return urls[i];
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
