require 'benchmark'

def array_sort(unsorted_arr, flag=false, count=0)
	
	if flag
		return unsorted_arr
	else
		count -= 1
		index_arr = Array.new(10) {[]}
		nil_flag = true
		
		unsorted_arr.each do |n|
			n_s = n.to_s[count]
				
			if n_s && n_s.to_i
				nil_flag = false
				index_arr[n.to_s[count].to_i] << n
			else
				index_arr[0] << n
			end
		end
		
		unless nil_flag
			unsorted_arr = []
			index_arr.each_with_object(unsorted_arr) do |n_a, obj|
				n_a.each {|n| obj << n }
			end
		end
		
		array_sort(unsorted_arr, nil_flag, count)
	end
end


arr = 1000000.times.map{ 20 + Random.rand(1000) } 

Benchmark.bmbm do |x|
  x.report("sort") { sorted_arr = array_sort(arr) }
end

# puts sorted_arr.inspect
