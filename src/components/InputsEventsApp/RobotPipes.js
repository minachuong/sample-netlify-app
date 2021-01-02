class RobotPipes {
  static applyBlahPipe(word, input) {
    const wordArray = word.split('');
    const inputArray = input.split('');
  
    const newArr = inputArray.map((letter, index) => {
      return wordArray[index % wordArray.length];
    });
  
    return newArr.join('');
  }

  static applyPhrasePipe(input) {
    return input ? `Some other stuffs like ${input} are floof` : '';
  }
}

export default RobotPipes;