//dummy data
const chatData = [
  [
    "General",
    [
      {
        name: "Joh n",
        you: false,
        message:
          "Lorem ipsum dolor sit amet, ei sed noluisse dissentiet. Audiam suscipit sadipscing no usu. Hendrerit voluptatum quaerendum mei et, cibo explicari . Vel tamquam electram theophrastus te, his mutat ornatus forensibus ea. "
      },
      {
        name: "Tangelo",
        you: true,
        message: "<img width='300' src='golang.jpg'/>"
      },
      {
        name: "Tony",
        you: false,
        message:
          "Lorem ipsum dolor sit amet, ei sed noluisse dissentiet, cibo explicari interesset te cum. His nulla senserit an, eam sint regione ne, ex verear partiendo vituperatoribus duo. Vel tamquam electram theophrastus te, his mutat ornatus forensibus ea. "
      },
      {
        name: "Kane",
        you: false,
        message:
          "Lorem ipsum dolor sit amet, ei sed noluisse dissentiet. Audiam suscipit sadipscing no usu. Hendrerit voluptatum quaerendum mei et, cibo explicari interesset te cum. His nulla senserit an, eam sint regione ne, ex verear partiendo vituperatoribus duo. Vel tamquam electram theophrastus te, his mutat ornatus forensibus ea. "
      },
      {
        name: "John",
        you: false,
        message: "<img width='300' src='golang.jpg'/>"
      },
      {
        name: "Tangelo",
        you: true,
        message:
          "Lorem ipsum dolor sit amet, ei sed noluisse dissentiet. Audiam suscipit sadipscing no usu. Hendrerit voluptatum quaerendum mei et, cibo explicari interesset te cum. His nulla senserit an, eam sint regione ne, ex verear partiendo vituperatoribus duo. Vel tamquam electram theophrastus te, his mutat ornatus forensibus ea. "
      }
    ]
  ],
  [
    "Assignment 1",
    [
      {
        name: "Kane",
        you: false,
        message:
          "Hey guys, I just finished the assignment, anyone needed help just leave a message. Cheers"
      },
      {
        name: "John",
        you: false,
        message: "<img width='300' src='golang.jpg'/>"
      }
    ]
  ]
];

const discussionData = [
  [
    "John",
    "Jelly cupcake cookie cake topping tootsie roll wafer. Caramels sugar plum gingerbread. Cheesecake bear claw sweet roll. Lemon drops cake muffin dessert jujubes ice cream bonbon gummies. Bear claw gummi bears dessert pudding apple pie. Toffee apple pie croissant halvah pastry croissant. Jelly-o cupcake tootsie roll cookie bonbon muffin powder. Muffin pastry biscuit apple pie candy canes tiramisu cake. Gingerbread carrot cake dragée wafer fruitcake danish bear claw fruitcake tootsie roll. Macaroon sweet apple pie toffee jelly beans cupcake candy canes cupcake apple pie. Sugar plum tiramisu sweet chocolate marzipan cake biscuit marshmallow. Topping jelly lemon drops cotton candy donut topping. Oat cake sesame snaps caramels croissant.",
    [
      {
        name: "John",
        kudo: 2,
        message:
          "Candy jelly-o bonbon cotton candy. Brownie apple pie jelly-o sugar plum jelly toffee dessert lemon drops icing. Dessert fruitcake cotton candy."
      },
      {
        name: "Kane",
        kudo: 8,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "John",
        kudo: 8,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Tangelo",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      }
    ]
  ],
  [
    "Kane",
    "Chocolate bar gummies marzipan pudding jelly-o chocolate bar. Jelly-o gingerbread sesame snaps pie powder. Croissant sweet roll toffee lemon drops macaroon halvah. Lemon drops tootsie roll cupcake. Gingerbread donut cheesecake pie cake dragée cake. Tootsie roll liquorice cookie toffee. Candy canes topping caramels cake sweet.",
    [
      {
        name: "Kane",
        kudo: 6,
        message:
          "Bonbon bear claw donut powder bonbon topping dessert wafer biscuit. Chocolate dessert cotton candy topping candy. Candy canes halvah powder. Topping jelly-o carrot cake dessert."
      },
      {
        name: "John",
        kudo: 8,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      }
    ]
  ],
  [
    "Tangelo",
    "Fruitcake muffin dessert macaroon chocolate cake lemon drops lollipop. Lollipop pudding pastry carrot cake. Bear claw cupcake lollipop cupcake pie. Donut donut sesame snaps muffin bear claw wafer biscuit. Dragée cotton candy candy canes carrot cake jelly-o. Pie dessert apple pie muffin icing caramels sweet roll cookie. Pastry powder pastry chocolate cake tiramisu liquorice bonbon soufflé cotton candy. Pie powder powder chupa chups cookie sesame snaps oat cake bear claw. Sweet tootsie roll powder jelly-o cupcake dessert muffin gummies. Tiramisu macaroon wafer gummies carrot cake wafer. Chocolate bar gingerbread cotton candy. Chupa chups icing dragée marzipan dragée. Gummies biscuit cheesecake.",
    [
      {
        name: "Tangelo",
        kudo: 2,
        message:
          "Candy jelly-o bonbon cotton candy. Brownie apple pie jelly-o sugar plum jelly toffee dessert lemon drops icing. Dessert fruitcake cotton candy."
      },
      {
        name: "John",
        kudo: 5,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "John",
        kudo: 8,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "John",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      },
      {
        name: "Kane",
        kudo: 2,
        message:
          "Chocolate cookie tart sweet. Soufflé muffin chupa chups danish bonbon apple pie marzipan tart. Jelly bear claw dragée cookie powder soufflé tootsie roll gummies sweet roll."
      }
    ]
  ]
];

//application state
let selectedThread = "";

function hideAll(query) {
  let arr = document.querySelectorAll(query);
  for (let o of arr) {
    o.style.display = "none";
  }
}

function showAll(query) {
  let arr = document.querySelectorAll(query);
  for (let o of arr) {
    o.style.display = "";
  }
}

function removeClassAll(query, className) {
  let arr = document.querySelectorAll(query);
  for (let o of arr) {
    o.classList.remove(className);
  }
}

function switchPage(element, pageID) {
  hideAll(".page");
  removeClassAll(".sidebar-item", "active");
  showAll(pageID);
  element.classList.add("active");
}

function switchTab(element, tabID, threadID) {
  hideAll(threadID + " .discussion-sub-thread");
  removeClassAll(threadID + " .discussion-tab", "active");
  showAll(tabID);
  element.classList.add("active");
}

function switchChatThread(element, indentifier) {
  let messagesWrapper = document.querySelector(".chat-messages-wrapper");
  hideAll(".chat-messages-wrapper > ul");
  removeClassAll(".chat-group", "active");
  showAll("#c-" + indentifier);
  document.querySelector(".chat-current").innerHTML =
    "<h3>" + chatData[indentifier][0] + "</h3>";
  element.classList.add("active");
  selectedThread = indentifier;
  messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
}

function navStep(set, index, incre) {
  let questions = document.querySelectorAll(set);
  if (true) {
    //check if answer has been given or previous button is pressed
    for (let o of questions) {
      o.style.display = "none";
    }
    questions[index + incre].style.display = "";
  } else {
    alert("Please give an answer before proceeding");
  }
}

function showModal() {
  document.querySelector(".modal-wrapper").style.display = "block";
}

function hideModal(callback) {
  document.querySelector(".modal-wrapper").style.display = "none";
  typeof callback == "function" && callback;
}

function createSlide(query) {
  let slides = document.querySelectorAll(query);
  for (let [index, o] of slides.entries()) {
    if (o.querySelector(".next")) {
      console.log(o.querySelector(".next"));
      o.querySelector(".next").addEventListener("click", () =>
        navStep(query, index, 1)
      );
    }
    if (o.querySelector(".prev")) {
      console.log(o.querySelector(".prev"));
      o.querySelector(".prev").addEventListener("click", () =>
        navStep(query, index, -1)
      );
    }
  }
}

function initiateChatData(displayedChat) {
  let chat = document.querySelector(".chat-messages-wrapper");
  let chatHeader = document.querySelector(".chat-current");
  let chatGroups = document.querySelector(".chat-groups");
  chat.innerHTML = "";
  chatHeader.innerHTML = "";
  chatGroups.innerHTML = "";
  for (let [index, o] of chatData.entries()) {
    //initiate chat dummy data
    let group = document.createElement("li");
    group.classList.add("chat-group");
    group.setAttribute("id", "g-" + index.toString());
    group.innerHTML = o[0];
    group.addEventListener("click", () =>
      switchChatThread(group, index.toString())
    );
    chatGroups.appendChild(group);
    let chatThread = document.createElement("ul");
    chatThread.setAttribute("id", "c-" + index.toString());
    for (let x of o[1]) {
      let temp2 = document.createElement("li");
      if (x.you) {
        temp2.classList.add("you");
      } else {
        temp2.classList.add("other");
      }
      temp2.innerHTML =
        "<img class='user' src='dummy-user.jpg'/><div class='user-name'>" +
        x.name +
        "</div><div class='message-wrapper'><span class='message'>" +
        x.message +
        "</span></div></li>";
      chatThread.appendChild(temp2);
    }
    chat.appendChild(chatThread);
    chatThread.style.display = "none";
  }
  document.querySelector(displayedChat).click();
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage(element) {
  el = document.getElementById("chat-input");
  if (el.value) {
    for (let [index, o] of chatData.entries()) {
      if (index.toString() == selectedThread) {
        o[1].push({ name: "Tangelo", you: true, message: el.value }); //add new entry to DB
        initiateChatData("#g-" + selectedThread); //re-render chat window
        el.value = ""; //clear input box
      }
    }
  }
}

function sendDiscussion(element) {
  let parent = element.parentNode;
  let grandParent = parent.parentNode;
  let commentThread = grandParent.querySelector("ul");
  let inputBox = parent.querySelector(".discussion-input");
  if (inputBox.value) {
    commentThread.innerHTML =
      commentThread.innerHTML +
      "<li class='card-list-item'><img class='user' src='dummy-user.jpg'><table class='discussion-vote'><tbody><tr><td class='down-vote'>-</td><td class='kudos'>0</td><td class='up-vote'>+</td></tr></tbody></table><div class='discussion-comment'><div class='card-list-item-head'>Tangelo</div><div class='card-list-item-cont'>" +
      inputBox.value +
      "</div></div></li>";
    inputBox.value = "";
    grandParent.scrollTop = grandParent.scrollHeight;
  }
}

function kudo(element, incre) {
  let parent = element.parentNode;
  let kudos = parent.querySelector(".kudos");
  kudos.innerText = parseInt(kudos.innerText) + incre;
}

function initiateDiscussionData(discussionData, query) {
  let tabWrapper = document.createElement("tr");
  let firstTab;
  for (let [index, o] of discussionData.entries()) {
    let tab = document.createElement("td");
    tab.classList.add("discussion-tab");
    tab.addEventListener("click", () => switchTab(tab, query + o[0], query));
    console.log(tab.onclick);
    tab.innerText = o[0];
    tabWrapper.appendChild(tab);
    let thread = document.createElement("div");
    thread.classList.add("discussion-sub-thread");
    thread.setAttribute("id", query.slice(1) + o[0]);
    thread.style.display = "none";
    let question = document.createElement("div");
    question.classList.add("discussion-question");
    question.innerHTML = o[1];
    thread.appendChild(question);
    let scroll = document.createElement("div");
    scroll.classList.add("card-ver-scroll");
    let temp = document.createElement("ul");
    scroll.appendChild(temp);
    if (index == 0) {
      thread.style.display = "";
      tab.classList.add("active");
    }
    for (let x of o[2]) {
      let temp2 = document.createElement("li");
      temp2.classList.add("card-list-item");
      temp2.innerHTML =
        "<img class='user' src='dummy-user.jpg' /><table class='discussion-vote'><tr><td class='down-vote' onclick='kudo(this,-1)'>-</td><td class='kudos'>" +
        x.kudo.toString() +
        "<td class='up-vote' onclick='kudo(this,1)'>+</td></tr></table><div class='discussion-comment'><div class='card-list-item-head'>" +
        x.name +
        "</div><div class='card-list-item-cont'>" +
        x.message +
        "</div></div>";
      temp.appendChild(temp2);
    }
    let input = document.createElement("div");
    input.classList.add("discussion-input-section");
    input.innerHTML =
      "<textarea onkeypress='if(event.keyCode == 13){event.preventDefault();sendDiscussion(this)}' class='discussion-input' placeholder='Type a message...'></textarea><button onclick='sendDiscussion(this)' id='discussion-input-submit'>Send</button>";
    scroll.appendChild(input);
    thread.appendChild(scroll);
    document.querySelector(query).appendChild(thread);
  }
  document.querySelector(query + " .discussion-tab-wrapper").append(tabWrapper);
}

initiateChatData(".chat-group"); //initiate dummy chat
initiateDiscussionData(discussionData, "#discussion1");
initiateDiscussionData(discussionData, "#discussion2");
createSlide(".step");
createSlide(".d-step");
