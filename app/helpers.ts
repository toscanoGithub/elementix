


  // Function to split the array into chunks of a given size
  export const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };


  export const getBgColorForCategory = (category?: string) => {
    console.log(category);
    
    switch (category) {
      case "nonmetal":
        return "#FFFFC4";
      case "alkali metal":
        return "#FFC6C6";
      case "alkaline earth metal":
        return "#D7D7FF";
      case "metalloid":
        return "#E5F0C5";
      case "noble gas":
        return "#FFE6C3";
      case "transition metal":
        return "#BFDEFF";
      case "lanthanide":
        return "#AFFFFF";
      case "halogen":
        return "#FFFFBB";
      case "actinide":
        return "#C2FFEB";
      case "post-transition metal":
        return "#B9FFB9";
    default:
      return "transparent";
    }
  }