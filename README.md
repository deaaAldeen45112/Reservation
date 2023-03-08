# Reservation
Reservation is a web application to help people book tables in restaurants and order food
# Architecture
I used the three-tier layer, which is divided into the first layer is Database , the second layer is Business Logic and the third layer is Presentation
and I used onion architecture to build the Business Logic(Backend).
<br>
I used rest api architectural style.
# Technology
I used oracle language to Database, c# (asp.net) to Business Logic, and angualr(typescript) to Presentation .
I used jwt token .
<br>
# OverView
Application has types of user are admin, waiter, customer, accountant.<br>
the admin do operation (create,delete,update,read)  on waiter, accountant, table, menu, category and assign tasks for waiter.
<br>
customer reserve the table, select food from menu, order food, pay the price of food by cash or online. 
<br>
waiter take food to customer and take the money if customer selected paying by cash.
