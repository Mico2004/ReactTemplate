const numbers =[50,51,52,53,"askdjmas",'skmd']
var appRoot = document.getElementById('app');
const renderList = () => {
    var template = (
       <div>
           <h1>This is JSX from app.js after changes</h1>
           <p>this is some additional info</p>    
           <ol>       
              {
                  numbers.map((number) => {
                      if(number!=51)
                          return <button li key={number}>Number: {number}</button>;
                      else
                          return <button disabled key={number}>Number: {number}</button>;
                })
              } 
            </ol>       
       </div>
   );

   ReactDOM.render(template, appRoot);
};

renderList();