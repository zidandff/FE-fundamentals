// Destructuring pada JavaScript merupakan sintaks yang dapat mengeluarkan nilai dari array atau properties dari sebuah object/array ke dalam satuan yang lebih kecil.

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// DESTRUCTURING OBJECT
{
  const { firstName, lastName, age } = profile;

  console.log(firstName, lastName, age);
}

// tanda kurung kurawal { } merepresentasikan objek yang akan didestruksikan.
// Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel di mana kita menyimpan nilai properti dari obyek profile.
// Pastikan penamaannya sesuai dengan nama dari properti obyek.

// DESTRUCTURING ASSIGNMENT
// assignment (inisialisasi) variabel yang sebelumnya telah dideklarasikan dengan cara destructuing.
{
  let firstName = "Dimas";
  let age = 20;

  // menginisialisasi nilai baru melalui object destruction
  ({ firstName, age } = profile);

  console.log(firstName, age);
}

// ASSIGNING TO DIFFRENT LOCAL VARIABLE
// ES6 menyediakan fitur yang bisa mendesktuksikan objek pada variabel lokal dengan nama yang berbeda
{
  const {
    firstName: localFirstName,
    lastName: localLastName,
    age: localAge,
  } = profile;
  console.log(localFirstName, localLastName, localAge);
}

// DEFAULT VALUES
// kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan.
{
  const { firstName, age, isMale = false } = profile;
  console.log(firstName, age, isMale);
}
// Dengan menambahkan default value di dalam desctructuting object jika properti tidak ditemukan, maka nilai default (nilai alternatif) akan diterapkan pada variabel.
// Namun jika properti ditemukan di dalam object maka isi dari properti tidak akan berubah dan default value akan diabaikan
