function darkenColor(hex = "", amount){
    hex = hex.replace("#", "");

    // Convert the hex string to RGB values
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  
    // Darken the RGB values by the given amount
    r = Math.round(r * (1 - amount));
    g = Math.round(g * (1 - amount));
    b = Math.round(b * (1 - amount));
  
    // Convert the darkened RGB values back to a hex string
    var darkenedHex = "#" + (r * 0x10000 + g * 0x100 + b).toString(16).padStart(6, "0");
  
    return darkenedHex;
}


  export default darkenColor;