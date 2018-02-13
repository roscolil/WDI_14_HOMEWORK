
class Phone
  def initialize(num)
    @num = num
    @split_num = @num.split('')
  end

  def number
    if @split_num.count == 11 && @split_num.first == "1"
      @split_num.shift
      return @split_num.join()
    end

    return @num.gsub(/[^0-9]+/, '')

    if @split_num.count != 11
      @split_num.gsub(/[0-9]+/, '0')
      return @split_num.join()
    end




  end
end
