const book = (()=>{
    let $ = (container) =>{
        return document.querySelector(container);
    }
    let all = (container) =>{
        return document.querySelectorAll(container);
    }
    let id = 0;
    let list = [];
    
    // console.log(isbn);
    let form = $('#book-form');
     let bookList = $('#book-list');
    // console.log(form);

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        let title = $('#title');
        let author = $('#author');
        let isbn = $('#isbn');
        let feedback = $('.feedback');

        let titleValue = title.value;
        let authorValue = author.value;
        let isbnValue = isbn.value;
        title.value = '';
        author.value = '';
        isbn.value = '';

         let bookObj = {
            id : id,
            title : titleValue,
            author : authorValue,
            isbn : isbnValue
        }
        id++;
        list.push(bookObj);

        if(titleValue === ''|| authorValue === ''|| isbnValue === ''){
        	feedback.classList.add('showItem');
        	feedback.textContent = `Please Enter Some Value`;

        	setTimeout(()=>{
        		feedback.classList.remove('showItem');
        	},2000);
        }
        else{
        	feedback.classList.add('showGreen');
        	feedback.textContent = `Enter Occure Successfully`;
        	setTimeout(()=>{
        		feedback.classList.remove('showGreen');
        	},2000);
        	let tr = document.createElement('tr');
	        tr.classList.add('tr');
	        tr.innerHTML = `<td>${bookObj.title}</td>
	        <td>${bookObj.author}</td>
	        <td>${bookObj.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            <td><a href="#" class="btn btn-block btn-sm edit" data-id="${bookObj.id}">
            <i class="fas fa-edit"></i>
           </a></td>
            `;
	        bookList.appendChild(tr);
	        }

       
        //console.log(list);
        
    })

    bookList.addEventListener('click',(event)=>{
    	event.preventDefault();
    	let jik = $('.jik');
    	let titleValue = title.value;
        let authorValue = author.value;
        let isbnValue = isbn.value;
    	// console.log(jik);
    	if(event.target.classList.contains('delete')){
    		let kip = event.target.parentElement.parentElement;
    		// console.log(kip);
    		bookList.removeChild(kip);
        }
        else if(event.target.parentElement.classList.contains('edit')){
            //  console.log("Boss");
            let kip2 = event.target.parentElement.parentElement.parentElement;
            let id = parseInt(event.target.parentElement.dataset.id)
            // console.log(list);
             bookList.removeChild(kip2);

             let beforeArray = list.filter((item)=>{
                 return item.id == id;
             })
             // console.log(beforeArray);
             title.value = beforeArray[0].title;
             author.value = beforeArray[0].author;
             isbn.value = beforeArray[0].isbn;
             let tempArray = list.filter((item)=>{
             	return item.id !== id;
             })
             list = tempArray;
             // console.log(tempArray);
        }
    })

})();
