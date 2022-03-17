## Insertion Sort Project

***Sorular***
	
	[22,27,16,2,18,6] -> Insertion Sort

 1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
 2. Big-O gösterimini yazınız.
 3. Time Complexity: Average case: Aradığımız sayının ortada
    olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?
    Yazınız.
 5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını
    yazınız.

***Cevaplar***

 1. I.stage : [22,27,16,2,18,6] (n)

     II.stage : [2,27,16,22,18,6] (n-1)

	 III.stage : [2,6,16,22,18,27] (n-2)

	 IV.stage : [2,6,16,18,22,27] (1)
 2. O(n^2)
 3. Best case: O(n) = O(6)

	Average case: O(n^2) = O(36)

	Worst case: O(n^2) = 0(36)

 4. Average case.
 5. I.stage : [7,3,5,8,2,9,4,15,6]

	 II.stage : [2,3,5,8,7,9,4,15,6]

	 III.stage : [2,3,4,8,7,9,5,15,6]

	 IV.stage : [2,3,4,5,7,9,8,15,6]

 	 V.stage : [2,3,4,5,6,9,8,15,7]
