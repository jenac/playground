import 'package:flutter/material.dart';
import 'package:furniture_app/constants.dart';
import 'package:furniture_app/screens/details/components/color_dot.dart';
import 'package:furniture_app/screens/details/components/product_poster.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Column(
      children: <Widget>[
        Container(
          width: double.infinity,
          padding: EdgeInsets.symmetric(horizontal: kDefaultPadding),
          decoration: BoxDecoration(
            color: kBackgroundColor,
            borderRadius: BorderRadius.only(
              bottomLeft: Radius.circular(50),
              bottomRight: Radius.circular(50),
            )
          ),
          child: Column(
            children: <Widget>[
              ProductPoster(size: size, image: "assets/images/Item_1.png",),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: kDefaultPadding),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    ColorDot(fillColor: Color(0xFF80989A), isSelected: true,),
                    ColorDot(fillColor: Color(0xFFFF5200), ),
                    ColorDot(fillColor: kPrimaryColor ),

                  ],
                ),
              ),

            ],
          ),
        )
      ],
      
    );
  }
}

