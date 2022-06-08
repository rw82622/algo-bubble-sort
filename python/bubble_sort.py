
def bubble_sort(arr):
    swaps = 0
    ops = 0
    for j in range(len(arr)):
        swapped = False
        for i in range (1, len(arr)-j):
            ops += 1
            if arr[i] < arr[i-1]:
                arr[i-1], arr[i] = arr[i], arr[i-1]
                swaps += 1
                swapped = True
        if not swapped:
            break
    print(f"Final result: {arr}")
    print(f"Swaps: {swaps} Operations: {ops}")
    
    
sequence = [4, 3, 5, 0, 1]
bubble_sort(sequence)
            


