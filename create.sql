drop table valenca.installment;
drop table valenca.transaction;
create table valenca.transaction (
	code text primary key,
	amount numeric,
	number_installments integer,
	payment_method text,
	date timestamp default now()
);
create table valenca.installment (
	code text references valenca.transaction (code),
	number integer,
	amount numeric,
	primary key (code, number)
);