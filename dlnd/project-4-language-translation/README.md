# Project 4 - Language Translation

## French to English
Project 4 involved building and training a sequence to sequence model on English and corresponding French sentences. The network was fairly sucessful at translating sentences containing the 227 words used during training. Sentences with words outside of that range showed worse results, but that is to be expected. Training on a larger corpus with the same network could produce some promising results.

### Structure
The RNN built for this project used an encoder-decoder architecture. The network performed the usual sequence-to-sequence processing. The English and French vocab was mapped to integer ids for use in the network, then mapped back to words for the network's predictions. 

### Results
After some trial and error, followed by some help from a Udacity Reviewer, I got good results for the amount of data used. 
