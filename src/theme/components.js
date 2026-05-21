const components = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 2,
        paddingInline: 18,
        textTransform: "none",
        fontWeight: 600,
      },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "0px 1px 3px rgba(0,0,0,0.06)",
      },
    },
  },
};

export default components;
