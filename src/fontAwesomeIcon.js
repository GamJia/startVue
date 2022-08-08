import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {faList,faMagnifyingGlass,faChevronRight,faEllipsis,faCartPlus,faTrashCan} from "@fortawesome/free-solid-svg-icons";
library.add(faList,faMagnifyingGlass,faChevronRight,faEllipsis,faCartPlus,faTrashCan);

Vue.component("font-awesome-icon", FontAwesomeIcon);
