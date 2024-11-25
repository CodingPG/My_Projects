package com.finance.tracker;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Tracker tracker = new Tracker();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Add Income");
            System.out.println("2. Add Expense");
            System.out.println("3. View Report");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> tracker.addIncome(scanner);
                case 2 -> tracker.addExpense(scanner);
                case 3 -> tracker.viewReport();
                case 4 -> running = false;
                default -> System.out.println("Invalid option! Try again.");
            }
        }

        scanner.close();
    }
}
