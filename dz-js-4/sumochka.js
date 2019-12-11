var bag = {
  parfume: "Ives Rosher",
  hearbrush: "Superbrash",
  addInto: function(elementToBeAdded, elementName) {
    this[elementToBeAdded] = elementName;
  },
  removeOut: function(elementToBeRemoved) {
    delete this[elementToBeRemoved];
  }
};
for (var prop in bag)
  if (typeof bag[prop] != "function") console.log(prop + " -> " + bag[prop]);
bag.addInto("phone", "Samsung Galaxy J7");
bag.removeOut("hearbrush");
for (var prop in bag)
  if (typeof bag[prop] != "function") console.log(prop + " -> " + bag[prop]);
