/*for (i=1;i<51;i++)
{
    console.log(`Voter number ${i} is currently voting` );
}*/

let listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]; 
 for(i=0;i<listOfNeighbours.length;i++)
 {
     for(x=0;x<listOfNeighbours[i].length;x++)
     {
         console.log(`'Neighbor:${listOfNeighbours[i][x]}' for each country`);
     }
 }