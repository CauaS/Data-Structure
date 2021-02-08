function LinkedList(){
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkedList.prototype.addToHead = function(value) {
     let newNode = new Node(value, this.head, null);

     if(this.head) this.head.prev = newNode;
     else this.tail = newNode;

     this.head = newNode;
  }
  
  LinkedList.prototype.addToTail = function(value) {
     let newNode = new Node(value, null, this.tail);
    
     if(this.tail) this.tail.next = newNode;
     else this.head = newNode;
  
     this.tail = newNode;
  }

  LinkedList.prototype.removeHead = function() {   
     if(!this.head) return null;  
     
      var nodeValue = this.head.value;
      this.head = this.head.next;

      if(this.head) this.head.prev = null;
      else this.tail = null

      return nodeValue;
  }

  LinkedList.prototype.removeTail = function() {
      if(!this.tail) return null;  

      var nodeValue = this.tail.value;
      this.tail = this.tail.prev;

      if(this.tail) this.tail.next = null;
      else this.head = null

      return nodeValue;
   }

   LinkedList.prototype.searchNode = function(searchValue) {
     var currrentNode = this.head;

     while(currrentNode){
        if(currrentNode.value === searchValue) return currrentNode.value;
        currrentNode = currrentNode.next
     }

     return null;
   }

   LinkedList.prototype.indexOf = function(searchValue) {
      var currentNode = this.head;
      var index = 0;
      while(currentNode){
         if(currentNode.value === searchValue) return index
         else {
            index++
            currentNode = currentNode.next
         }
      }
   }
  
  
   const linked = new LinkedList()
   linked.addToHead(3);
   linked.addToHead(2);
   linked.addToHead(1);


  console.log(linked)
