package com.finance.tracker;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Tracker {
    private List<Income> incomeList;
    private List<Expense> expenseList;

    public Tracker() {
        incomeList = new ArrayList<>();
        expenseList = new ArrayList<>();
    }

    public void addIncome(Scanner scanner) {
        System.out.print("Enter income amount: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter income source: ");
        String source = scanner.nextLine();
        System.out.print("Enter income date (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        Income income = new Income(amount, source, date);
        incomeList.add(income);
        System.out.println("Income added successfully!");
    }

    public void addExpense(Scanner scanner) {
        System.out.print("Enter expense amount: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume newline
        System.out.print("Enter expense category (FOOD, TRANSPORT, RENT, etc.): ");
        String category = scanner.nextLine();
        System.out.print("Enter expense date (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        Expense expense = new Expense(amount, category, date);
        expenseList.add(expense);
        System.out.println("Expense added successfully!");
    }

    public void viewReport() {
        double totalIncome = incomeList.stream().mapToDouble(Income::getAmount).sum();
        double totalExpenses = expenseList.stream().mapToDouble(Expense::getAmount).sum();
        double balance = totalIncome - totalExpenses;

        System.out.println("\n--- Report ---");
        System.out.println("Total Income: $" + totalIncome);
        System.out.println("Total Expenses: $" + totalExpenses);
        System.out.println("Balance: $" + balance);
        System.out.println("\nIncome Details: ");
        incomeList.forEach(System.out::println);
        System.out.println("\nExpense Details: ");
        expenseList.forEach(System.out::println);
    }
}
