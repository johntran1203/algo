    const people = [
    {
      name: "bob",
      age: 20,
      position: 'developer',
      category: 'home',
      salary: 100,
      company: 1,
    },
    {
      name: "anna",
      age: 25,
      position: 'designer',
      category: 'in person',
      salary: 300,
      company: 1,
    },
    {
      name: "susy",
      age: 30,
      position: 'the boss',
      category: 'home',
      salary: 400,
      company: 2,
    },
    {
      name: "anna",
      age: 32,
      position: 'intern',
      category: 'home',
      salary: 10,
      company: 2,
    },
  ]
  
  age = () => {
    return people.map((person) => {
      return {
        age: person.age + 1
      }
    })
  }
  
  location = () => {
    return ['fire', ...new Set(people.map((person) => (person.category))
    ), 'remote']
  }
  // console.log(age())
  // console.log(location())
  
  const colors = ['red', 'red', 'blue', 'orange']
  const friends = ['john', 'peter','bob', 'anna','kelly']
  
  
  const color = [... new Set(colors.map((color) => color))]
  
  // console.log(color)


  //filter
  const youngpeople = people.filter((person) =>  { return person.category === 'home'})
//   console.log(youngpeople)

//find

const home = people.find((person) => {return person.category ==='home'})
// console.log(home)

//reduce
// iterates, callback function
// reduces to a single value -number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

// const dailyTotal = people.reduce((acc, curr) =>{
//     total = acc += curr.salary
//     return total
    
// },0)
// console.log(dailyTotal)

let total = people.reduce((acc, curr) => {
    const {salary, company} = curr
    acc.totalSalary += salary
    acc.companySize += company
    return acc
}, {
    totalSalary: 0,
    companySize: 0,
})

// console.log(total)