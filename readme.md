# Alliterated Actors

**Read the guideline before start**

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
console.log(alliterated)
    return alliterated.split(' ').every(function(name) {
      console.log(name)
      return name
    })

const a = names.find(alliterated => {
    let arralliterated = alliterated.split(' ').map(word => word[0]);
    console.log(arralliterated)
  });
