

const bdy = document.querySelector('.bdy');
const row = document.querySelector('.row');

async function fetchApi(){
    const url = `https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6`;

    const response = await fetch(url);

    const data = await response.json();

    generateHTML(data.clients);
}

fetchApi();

function generateHTML(results){
    let generatedHTML = '';
    results.map(bdy => {
        generatedHTML += 
        `
          <tr class="row">

            <td>${bdy.name}</td>
            <td>${bdy.id}</td>
            <td>${bdy.company}</td>
            <td>${bdy.orderId}</td>
            <td>${bdy.invoicepaid}</td>
            <td>${bdy.invoicePending}</td>


          </tr>

        `
    })
    bdy.innerHTML = generatedHTML;
}


