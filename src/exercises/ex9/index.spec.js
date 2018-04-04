const { checkMostUsedWord, checkLessUsedWord } = require('./index');

describe('In Exercise 9 ', () => {
    const inputText = 'You can enter any text that you would like in the form at the left for example a paper that you have written or a newspaper article that you have copied from another website after inputting the text you can then see useful information about words and phrases in that text based on data from the Corpus of Contemporary American English first it will highlight all of the medium and lower frequency words in your text and create lists of these words that you can use offline this frequency data can help language learners focus on new words and it can allow you to see what the text is about text specific words you can also have it show you the academic words in your text second you can click through the words in the text to see a detailed word sketch of any of the words showing their definition and detailed information for the word from COCA collocates which provide meaning into the meaning and usage of the word resortable concordance lines and the frequency of the word overall and by genre finally you can do powerful searches on selected phrases in your text to show related phrases in COCA in this way this resource is like a collocational thesaurus to see what related phrases are most likely in different styles of English for example if you click on the words potent argument in the text that you enter it will suggest alternate ways to express this powerful or convincing argument and it will show you the frequency of those phrases in COCA overall and by genre this will help you use just the right phrase based on a huge collection of native English texts words are magnificent';

    test('checkMostUsedWord should return expected value', () => {
        // Given
        const expectedValue = 'THE';
        // When
        const calculatedValue = checkMostUsedWord(inputText);
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });

    test('checkLessUsedWord should return expected value', () => {
        // Given
        const expectedValue = 'MAGNIFICENT';
        // When
        const calculatedValue = checkLessUsedWord(inputText);
        // Then
        expect(calculatedValue).toEqual(expectedValue);
    });
});