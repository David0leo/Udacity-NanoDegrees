# Project 3 - Generate TV Scripts
Project 3 covered building a recurrent neural network to generate new tv scripts. The RNN was trained on parts of a Kaggle dataset containing 27 seasons of scripts from The Simpsons. The parts of the dataset where those contianing scenes from Moe's Tavern. The network was not very successful at creating coherent dialogue. However, it did show a decent ability to construct sentences with a semblence of proper grammar and general structure.

## Example
Below is an example of text generate with the word 'moe_szyslak' as a priming word:

- *moe_szyslak*: here, homer. have a big frosty mug of fuhgetaboutit.

- *homer_simpson*:(not moe) do you go.

- *moe_szyslak*: i mean, uh, sure simpson!


- *moe_szyslak*:(beat) maybe you do you take?

- *homer_simpson*:(tough)" that's pretty boy) so god, wiggum. are you know, i want to nice, but i was the little-- i'm our more noises by the first! why just the rebuttal!

- *carl_carlson*: guys, i need your advice.

- *homer_simpson*:(disappointed) when it might got.... moe, for a big guy.

- *moe_szyslak*: hey, that's okay. that's the best time i could play be homer or the day you guys, only all your kind." means(too accent, friendly) well, okay, i always seen this town by my drink, the kids. hey, god, i love! knew well, i'm sorry to send a world about so.

- *stillwater*: my barbara wasn't? not you doin' me,

## More Info
As you can see from reading the example above, the text is fairly incoherent. The main take-away from this is that the network learned some more general structure of sentences. Things like punctuation work, and starting lines with character names. 

One thing to note is that this network wasn't trained on very much data. To improve performance, you could try using a larger portion of the Kaggle's [The Simpsons by the Data](https://www.kaggle.com/wcukierski/the-simpsons-by-the-data) dataset.
