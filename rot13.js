/**
 * Evitons d'utiliser jQuery pour rien.
 */
function $(selector) {
  return document.querySelector(selector);
}

/**
 * Alphabet de référence
 */
function alphaB() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,;:!?()";
}

/**
 * Fonction de cryptage générique utilisée par la page
 */
function crypt() {
  var a = alphaB(),
      m = $("#userMessage").value,
      r = rot13(a,m);

  $("#result").innerHTML = r;
}

/**
 * Fonction de cryptage ROT13
 */
function rot13(a,m) {
  var result = "",
      clearLetterIndex = null,
      cryptLetterIndex = null;

  for (var i=0; i<m.length; i++) {
    var clearLetterIndex = a.indexOf(m[i]);
    var cryptLetterIndex = (clearLetterIndex+13) % a.length;
    result += a[cryptLetterIndex];
  }
  return result;
}
