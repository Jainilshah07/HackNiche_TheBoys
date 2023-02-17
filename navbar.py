import streamlit as st 
from st_on_hover_tabs import on_hover_tabs

st.set_page_config(layout="wide")

st.header("Custom tab component for on-hover navigation bar")
st.markdown('<style>' + open('./style.css').read() + '</style>', unsafe_allow_html=True)


with st.sidebar:
    tabs = on_hover_tabs(tabName=['Dashboard', 'Money', 'Economy'], 
                        iconName=['dashboard', 'money', 'economy'], default_choice=0)

    if tabs =='Budget':
        st.title("Budgeting")
        st.write('Name of option is {}'.format(tabs))

    elif tabs == 'Expense Tracking':
        st.title("Track your Expense")
        st.write('Name of option is {}'.format(tabs))

    elif tabs == 'Portfolio':
        st.title("Portfolio Management")
        st.write('Name of option is {}'.format(tabs))

    elif tabs == 'Financial goal setting':
        st.title("Portfolio Management")
        st.write('Name of option is {}'.format(tabs))