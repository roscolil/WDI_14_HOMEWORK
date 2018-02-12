
class Phone
  def initialize(num)
    @num = num
  end

  def number
    return @num.gsub(/[^0-9]+/, '')
  end

end
