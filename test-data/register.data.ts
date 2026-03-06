export const validRegisterData = () => {
  const rnd = Math.floor(Math.random() * 9999);

  return {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    city: "Bangkok",
    state: "TH",
    zipCode: "10110",
    ssn: "123456789",
    username: `user${rnd}`,
    password: "Passw0rd!",
    confirmPassword: "Passw0rd!"
  };
};

export const invalidFormatData = {
  missingFirstName: {
    firstName: "",
    lastName: "Doe",
    address: "123 Main St",
    city: "Bangkok",
    state: "TH",
    zipCode: "10110",
    ssn: "123456789",
    username: "user123",
    password: "Passw0rd!",
    confirmPassword: "Passw0rd!"
  },

  passwordMismatch: {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    city: "Bangkok",
    state: "TH",
    zipCode: "10110",
    ssn: "123456789",
    username: "user123",
    password: "Passw0rd!",
    confirmPassword: "WrongPass!"
  }
};