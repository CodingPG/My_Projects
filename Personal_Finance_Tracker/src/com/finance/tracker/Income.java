package com.finance.tracker;

public class Income {
    private double amount;
    private String source;
    private String date;

    public Income(double amount, String source, String date) {
        this.amount = amount;
        this.source = source;
        this.date = date;
    }

    public double getAmount() {
        return amount;
    }

    public String getSource() {
        return source;
    }

    public String getDate() {
        return date;
    }

    @Override
    public String toString() {
        return "Income{" +
                "Amount=" + amount +
                ", Source='" + source + '\'' +
                ", Date='" + date + '\'' +
                '}';
    }
}


