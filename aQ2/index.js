function highlightHTMLContent( htmlContent , plaintext , plainTextPositions ){

let ansContent = htmlContent;
    for( const pos of plainTextPositions){
        const str  = plaintext.substring(pos.start , pos.end);
        const regex =new RegExp(`\\b${str}\\b`, 'gi'); 
        console.log(regex)
        const highlight =   `<span style="background-color: grey;">${str}</span>`;
            ansContent =  ansContent.replace(regex , highlight);

    }
    return ansContent;
}

let obj =  [{        start: 241,
        end: 247,
    },
    {
        start: 518,
        end: 525,
    },
];


console.log(highlightHTMLContent(hc, pt , obj))


