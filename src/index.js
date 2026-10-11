import "./styles.css";
import { addToDoItem } from "./AddToDoItem.js";
import { format, isPast } from "date-fns"; 
import { GetFormInfo } from "./GetFormInfo.js";


document.addEventListener('DOMContentLoaded', () => {
    addToDoItem();
});

document.addEventListener('DOMContentLoaded', () => {
    GetFormInfo();
});