mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitinglist() {}

        fn sit_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}

pub fn eat_at_restaurant() {
    //absolute path
    crate::front_of_house::hosting::add_to_waitinglist();

    //relative path
    front_of_house::hosting::add_to_waitinglist();

    let mut meal = back_of_house::Breakfast::summer("Rye");
    //change
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast, please", meal.toast);

    //error, seasonal_fruit is not public
    // meal.seasonal_fruit = String::from("Banana");

    //enum members are public.
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;

}

fn serve_order() {}

mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("apple"),
            }
        }
    }

    pub enum Appetizer {
        Soup,
        Salad,
    }

    fn cook_order() {}

    fn fix_incorrect_order() {
        cook_order();
        super::serve_order(); //use super
    }
}
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
