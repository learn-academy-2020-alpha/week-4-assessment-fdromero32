# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']

fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']

def array_sorter(arr)
    new_arr2 = []
    new_arr = arr.delete_if { |obj| (obj.is_a? String) || (obj.is_a? TrueClass) || (obj.is_a? FalseClass)|| (obj.is_a? NilClass)}
    
    new_arr.each { |value| 
    if(value % 2 == 1 || value % 2 == -1) 
        new_arr2.push(value)
    end
}
new_arr2.sort

end

# p array_sorter(fullArr1)
# p array_sorter(fullArr2)

#--------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike
    def initialize(model, wheels, frame_size)
        @model = model
        @wheels = 2
        @frame_size = frame_size
        @bell = "off"
# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
        @speed = 0
    end

    def model
        @model
    end

    def frame_size
        @frame_size
    end

    def speed
        @speed
    end

    def bike_info
        "The #@model bike has #@wheels wheels and a #@frame_size frame."
    end
# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

    def bell_sound
    if @bell == "off"
            puts @bell = "RING RING RING RING"
    else 
        puts  @bell = "off"
    end
    end

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
    def pedal_faster
        @speed += 10
        puts "Your speed is #@speed mph!"
    end

    def brake
        if @speed > 0
            @speed -=5
            p "Your slowing down to #@speed mph!"
        else 
            @speed = 0
            p "You're not moving!"
        end
    end

end

# mountain_bike = Bike.new("Mountain Thunder", 2, "190cm")
kiddy_bike = Bike.new("Training Bike", 2, "130cm")

kiddy_bike.bell_sound
p kiddy_bike.speed
kiddy_bike.pedal_faster
kiddy_bike.pedal_faster
kiddy_bike.brake
kiddy_bike.brake
kiddy_bike.brake
kiddy_bike.brake
kiddy_bike.brake
kiddy_bike.brake
# p mountain_bike.bike_info