
import './pensionData.js'
import './chartColor.js'

window.onload=()=>{
    CUSTOMERS.forEach(customer=>{
        customer.pensions.forEach((pension)=>{pension.color=COLORS.shift();})
    })
    const WRAPPER=document.getElementsByClassName('graph_wrapper')[0];
    for(let i=0;i<36;i++){
        const GRAPH_COLUMN=CUSTOMERS.reduce((customerAcc,customerCur,customerIdx)=>{
            customerAcc.innerHTML+=customerCur.pensions.reduce((acc,cur,idx)=>{
                if(!cur.receipts[i])return acc;
                return acc+`
                    <div class="graph_element" style="background-color:${cur.color}; height:${cur.receipts[i]/400}%;"></div>
                `
            },"");
            return customerAcc;
        },document.createElement('li'));
        GRAPH_COLUMN.classList.add('graph_column','unactive_column')
        WRAPPER.appendChild(GRAPH_COLUMN);
    }
    const COLUMNS=document.getElementsByClassName('graph_column')
    COLUMNS[7].classList.remove('unactive_column')
    COLUMNS[7].classList.add('active_column')
    // for(let i=0; i<COLUMNS.length;i++){
    //     if(COLUMNS[i].hasChildNodes()){
    //         COLUMNS[i].classList.remove('unactive_column')
    //         COLUMNS[i].classList.add('active_column')
    //         break;
    //     }
    // }
}
