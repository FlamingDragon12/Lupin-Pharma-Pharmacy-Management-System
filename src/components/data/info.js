
import React from 'react';
import { AiFillMedicineBox, AiOutlineMedicineBox, AiOutlineOrderedList } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { RiBillFill, RiBillLine, RiContactsLine, RiDashboardFill, RiOrderPlayFill } from 'react-icons/ri';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'Dashboard',
          icon: <RiDashboardFill />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'Medicines',
          icon: <AiFillMedicineBox />,
        },
        {
          name: 'Billings',
          icon: <RiBillLine />,
        },
        {
          name: 'Customers',
          icon: <RiContactsLine />,
        },
        {
          name: 'Managers',
          icon: <RiContactsLine />,
        },
        
      ],
    },
]

export const userlinks = [
  {
    title: 'Medicine',
    links: [
      {
        name: 'SelectMedicines',
        icon: <AiOutlineMedicineBox />,
      },
    ],
  },

  {
    title: 'Orders',
    links: [
      {
        name: 'Orders',
        icon: <AiOutlineOrderedList />,
      },
      // {
      //   name: 'Billings',
      //   icon: <RiBillLine />,
      // },
      // {
      //   name: 'Customers',
      //   icon: <RiContactsLine />,
      // },
      // {
      //   name: 'Login',
      //   icon: <RiContactsLine />,
      // },
    ],
  },
]

export const medicine = [
  {
    id: 0,
    name: "Crocin",
    sellingPrice: 150,
    quantity: 36,
    lowStock: undefined,
    costPrice: 105,
    category: "tablet",
    additionalNotes: "",
  },
  {
    id: 1,
    name: "DK gell",
    sellingPrice: 220,
    quantity: 15,
    lowStock: undefined,
    costPrice: 175,
    category: "cream",
    additionalNotes: "",
  },
  {
    id: 2,
    name: "Gluformin",
    sellingPrice: 75,
    quantity: 55,
    lowStock: undefined,
    costPrice: 20,
    category: "tablet",
    additionalNotes: "",
  },
  {
    id: 3,
    name: "Lanol",
    sellingPrice: 90,
    quantity: 30,
    lowStock: undefined,
    costPrice: 55,
    category: "tablet",
    additionalNotes: "",
  }
]

export const bills = [
  {
    id: 100,
    name: "Aditya",
    total_amount: "1000",
    medicine: "Crocin",
    quantity: 8,
    date: "12/6/2022",
  },
  {
    id: 101,
    name: "Aryaman",
    total_amount: "2000",
    quantity: 15,
    medicine: "Levocet",
    date: "18/6/2022",
  },
  {
    id: 102,
    name: "Vinayak",
    total_amount: "1800",
    quantity: 20,
    medicine: "Lanol",
    date: "9/7/2022",
  },
  {
    id: 103,
    name: "Aryaman",
    total_amount: "7500",
    quantity: 100,
    medicine: "Gluformin",
    date: "26/8/2022",
  }
]

export const managers = [
  {
    id: 100,
    name: "Sarthak",
    salary: "10000",
    years: "3",
  },
  {
    id: 101,
    name: "Rakesh",
    salary: "70000",
    years: "6",
  }
]


export const customer = [
  {
    id: 100,
    name: "Sarthak Shah",
    company: "Noble Medical",
    location: "Andheri East",
  },
  {
    id: 101,
    name: "Rakesh Patil",
    company: "Pharma Care",
    location: "Borivali West",
  },
  {
    id: 100,
    name: "Dharmesh Rathod",
    company: "Novel Medical",
    location: "Vile Parle",
  },
]