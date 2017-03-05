# bs-test
Experimenting with some bucklescript, reasonml and rehydrate

# Prerequisites

If you are on macOS or Linux I think you need to install ninja:

```
brew update
brew install ninja
```

# Editing

I would recommend using Visual Studio Code with the [reason plugin](https://marketplace.visualstudio.com/items?itemName=freebroccolo.reasonml). 

Bucklescript seems to create .merlin file that will power the intellisense of the VSCode plugin. To make this work you need to have `ocamlmerlin` on your path. One way to do this is to install merlin via opam:

```
opam install merlin
```

# How to use
```
yarn install
yarn start
```
