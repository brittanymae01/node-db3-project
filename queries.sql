-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select ProductName, category.categoryName
from product
join category
on category.id = product.categoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select [order].id, Shipper.CompanyName
from [order]
join Shipper on Shipper.id = [order].ShipVia
where [order].OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select Product.productName 
from OrderDetail 
join Product on Product.id = OrderDetail.ProductId 
where OrderId = 10251
order by Product.productName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select [order].id, Customer.CompanyName, Employee.LastName
from [order]
join Customer on Customer.id = [order].CustomerId
join Employee on Employee.id = [order].EmployeeId
