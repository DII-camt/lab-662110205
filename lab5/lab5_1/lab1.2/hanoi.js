const hanoi = (n, a, c, b) => {
  if (n === 0) {
    return;
  }
  hanoi(n - 1, a, b, c);
  console.log(`${a} --> ${b}`);
  hanoi(n - 1, b, c, a);
}

const numRock = 3;
hanoi(numRock, "A", "C", "B");

const students = [
  662110182, 662110183, 662110184, 662110185, 662110186, 662110187, 662110188,
  662110189, 662110190, 662110191, 662110192, 662110193, 662110194, 662110195,
  662110196, 662110197, 662110198, 662110199, 662110200, 662110201, 662110202,
  662110203, 662110204, 662110205, 662110265,
];

const GroupRandom = (students, n) => {
    
    const random = students.sort(() => 0.5 - Math.random());
    
    
    const GroupCount = Math.floor(random.length / n);
    const remainder = random.length % n;
    
    let groups = [];
    let index = 0;
  
    for (let i = 0; i < GroupCount; i++) {
      groups.push(random.slice(index, index + n));
      index += n;
    }
  
    // Distribute remaining students
    for (let i = 0; i < remainder; i++) {
      groups[i].push(random[index + i]);
    }
  
    return groups;
  };
  
  const n = 3;
  const groupedStudents = GroupRandom(students, n);
  console.log(groupedStudents);

