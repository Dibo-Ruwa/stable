export const profileValidations = {
          firstName: (value: string) => {
            if (!value) {
              return "first name required!!!";
            }
            // if (value.length < 4) {
            //   return "firstname must be at least 4 characters long!!!";
            // }
            return undefined;
          },
          lastName: (value: string) => {
            if (!value) {
              return "last name required!!!";
            }
            // if (value.length < 4) {
            //   return "lastname must be at least 4 characters long!!!";
            // }
            return undefined;
          },
         
          email: (value: string) => {
            if (!value) {
              return "email required!!!";
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
              return "invalid email format!!!";
            }
            return undefined;
          },
          phone: (value: string) => {
            if (!value) {
              return "phone required!!!";
            }
            if (!/^\d{11}$/.test(value)) {
              return "phone number must be 10 digits!!!";
            }
            return undefined;
          },
          address: (value: string) => {
            if (!value) {
              return "address is required!!!";
            }
            // if (value.length < 10) {
            //   return "address must be at least 10 characters long!!!";
            // }
            return undefined;
          },
          state: (value: string) => {
            if (!value) {
              return "state is required!!!";
            }
            // if (value.length < 4) {
            //   return "state must be at least 4 characters long!!!";
            // }
            return undefined;
          },
          lga: (value: string) => {
            if (!value) {
              return "lga is required!!!";
            }
            // if (value.length < 4) {
            //   return "city must be at least 4 characters long!!!";
            // }
            return undefined;
          },
         
         
        };