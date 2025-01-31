# **Chemify**

## **Description**

**Chemify** is an interactive simulator for simple inorganic chemical reactions, designed for middle and early high school students.

Chemify allows users to select elements from a hidden periodic table and use them in a dedicated workspace to simulate chemical reactions.

---

## **Periodic Table**

![Untitled](https://github.com/user-attachments/assets/104c04e7-b88a-4eec-bd42-93d3e52a7a24)

The periodic table can be accessed via a bottom button. It provides essential information about each element, including electron count, name, symbol, atomic mass, and electron shells. Elements that can participate in reactions are highlighted, while restricted elements remain dimmed.

---

## **Workspace**

![Untitled2](https://github.com/user-attachments/assets/61323de0-ceee-4b94-8656-a3339a90a2ca)

Elements can be dragged from the sidebar into the workspace using the mouse. When overlapped, they react, generating all possible compound combinations.

For example:
- Combining **calcium** and **potassium** results in **potassium chloride**.
- Reacting **iron** with **oxygen** produces **iron(II) oxide**.
- Further combining **iron(II) oxide** with **potassium chloride** leads to a **double replacement reaction**, forming **iron(II) chloride** and **potassium oxide**.

---

## **Detailed Popup**

![Untitled3](https://github.com/user-attachments/assets/6a66ee17-277a-4db5-9b71-1c189428cfa2)

Clicking on an element or compound opens a detailed popup displaying its **molecular mass, formula, composition, and additional information** about its elements.

---

## **Technologies Used**

- **Angular**
- **Ionic**
- **SCSS**

---

## **Development**

The entire system is built from scratch using **native JavaScript events** and **SVG-based rendering** to ensure a dynamic and visually appealing experience.

---

## **Supported Reactions**

Chemify defines the following chemical reactions:

- $H_2 + O_2 \rightarrow H_2O$
- $H_2O + O_2 \rightarrow H_2O_2$
- **Acid + Base** → **Neutralization Reaction**
- **Acid + Salt** → **Double Replacement Reaction**
- **Acid + Metal Oxide (Cationic)** → **Salt + Water**
- **Base + Salt** → **Double Replacement Reaction**
- **Base + Non-metal Oxide** → **Salt + Water**
- **Metal Oxide + Salt** → **Double Replacement Reaction**

Chemify provides an engaging and educational way for students to explore chemical reactions in an intuitive and interactive environment.

