import tkinter as tk
from tkinter import messagebox
import json
import os

# Dosya yolu
DATA_FILE = 'products.json'

def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    return {}

def save_data(data):
    with open(DATA_FILE, 'w') as file:
        json.dump(data, file, indent=4)

def add_product():
    name = entry_name.get().strip()
    quantity = entry_quantity.get().strip()
    if name and quantity.isdigit():
        quantity = int(quantity)
        products = load_data()
        if name in products:
            products[name] += quantity
        else:
            products[name] = quantity
        save_data(products)
        update_listbox()
        entry_name.delete(0, tk.END)
        entry_quantity.delete(0, tk.END)
    else:
        messagebox.showerror("Hata", "Geçersiz ürün adı veya miktar")

def update_product(action):
    selected = listbox_products.curselection()
    if selected:
        product = listbox_products.get(selected[0])
        products = load_data()
        if action == "increase":
            products[product] += 1
        elif action == "decrease":
            if products[product] > 0:
                products[product] -= 1
            else:
                messagebox.showwarning("Uyarı", "Ürün miktarı sıfırın altına inemez.")
        save_data(products)
        update_listbox()

def delete_product():
    selected = listbox_products.curselection()
    if selected:
        product = listbox_products.get(selected[0])
        products = load_data()
        del products[product]
        save_data(products)
        update_listbox()

def search_product():
    search_term = entry_search.get().lower()
    listbox_products.delete(0, tk.END)
    products = load_data()
    for product in sorted(products.keys()):
        if search_term in product.lower():
            listbox_products.insert(tk.END, product)

def update_listbox():
    listbox_products.delete(0, tk.END)
    products = load_data()
    for product in sorted(products.keys()):
        listbox_products.insert(tk.END, product)

def switch_to_list_page():
    page_frame.pack_forget()
    list_frame.pack()

def switch_to_add_page():
    list_frame.pack_forget()
    page_frame.pack()

# Tkinter penceresi oluşturma
root = tk.Tk()
root.title("Stok Takip Programı")

# Sayfa 1 - Ürün Ekleme
page_frame = tk.Frame(root)

tk.Label(page_frame, text="Ürün Adı:").pack()
entry_name = tk.Entry(page_frame)
entry_name.pack()

tk.Label(page_frame, text="Miktar:").pack()
entry_quantity = tk.Entry(page_frame)
entry_quantity.pack()

tk.Button(page_frame, text="Ürün Ekle", command=add_product).pack()

tk.Button(page_frame, text="Liste Sayfasına Geç", command=switch_to_list_page).pack()

page_frame.pack()

# Sayfa 2 - Ürün Listesi
list_frame = tk.Frame(root)

listbox_products = tk.Listbox(list_frame)
listbox_products.pack()

tk.Button(list_frame, text="Ürünü Arttır", command=lambda: update_product("increase")).pack()
tk.Button(list_frame, text="Ürünü Azalt", command=lambda: update_product("decrease")).pack()
tk.Button(list_frame, text="Ürünü Sil", command=delete_product).pack()

tk.Label(list_frame, text="Arama:").pack()
entry_search = tk.Entry(list_frame)
entry_search.pack()
tk.Button(list_frame, text="Ara", command=search_product).pack()

tk.Button(list_frame, text="Ürün Ekleme Sayfasına Geç", command=switch_to_add_page).pack()

update_listbox()

root.mainloop()
