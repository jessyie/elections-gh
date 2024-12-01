from django.core.cache import cache
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
#from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.template.loader import render_to_string
#import folium
import pandas as pd # type: ignore
import numpy as np
import os # type: ignore
import geopandas as gpd
import fiona
#import matplotlib
import locale
import json
#from folium import plugins
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.staticfiles.storage import staticfiles_storage
from django.conf import settings
from dotenv import load_dotenv
from sqlalchemy import create_engine



# Load environment variables from .env file
load_dotenv()

# Get the variables from the environment
db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASSWORD')
db_host = os.getenv('DB_HOST')


# Create the database engine using the variables
#engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

# connection string: driver://username:password@server/database
engine = create_engine(f'postgresql+psycopg2://{db_user}:{db_password}@{db_host}/{db_name}')

# 2024 queries

# query2024 = """
#     SELECT "2024constituencies"."ConstName", "2024regions"."RegName", "2024data_const".*
#         FROM public."2024data_const"
#         Join "2024constituencies" on "2024data_const"."ConstCode"="2024constituencies"."ConstCode"
#         Join "2024regions" on "2024constituencies"."RegCode"="2024regions"."RegCode";

# """

# df2024 = pd.read_sql(query2024, engine)

# # 2020 queries

# query2020 = """
#     SELECT "2020constituencies"."ConstName", "2020regions"."RegName", "2020data_const".*
#         FROM public."2020data_const"
#         Join "2020constituencies" on "2020data_const"."ConstCode"="2020constituencies"."ConstCode"
#         Join "2020regions" on "2020constituencies"."RegCode"="2020regions"."RegCode";

# """

# df2020 = pd.read_sql(query2020, engine)

# # 2016 queries

# query2016 = """
#     SELECT "2016constituencies"."ConstName", "2016constituencies"."RegName", "2016data_const".*
#         FROM public."2016data_const"
#         Join "2016constituencies" on "2016data_const"."ConstCode"="2016constituencies"."ConstCode";

# """

# df2016 = pd.read_sql(query2016, engine)

# # 2012 queries

# query2012 = """
#     SELECT "2012constituencies"."ConstName", "2012constituencies"."RegName", "2012data_const".*
#         FROM public."2012data_const"
#         Join "2012constituencies" on "2012data_const"."ConstCode"="2012constituencies"."ConstCode";

# """

# df2012 = pd.read_sql(query2012, engine)

# # 2008 queries

# query2008 = """
#     SELECT "2008constituencies"."ConstName", "2008constituencies"."RegName", "2008data_const".*
#         FROM public."2008data_const"
#         Join "2008constituencies" on "2008data_const"."ConstCode"="2008constituencies"."ConstCode";

# """

# df2008 = pd.read_sql(query2008, engine)

# # 2008_R queries

# query2008_R = """
#     SELECT "2008constituencies"."ConstName", "2008constituencies"."RegName", "2008_Rdata_const".*
#         FROM public."2008_Rdata_const"
#         Join "2008constituencies" on "2008_Rdata_const"."ConstCode"="2008constituencies"."ConstCode";

# """

# df2008_R = pd.read_sql(query2008_R, engine)

# # 2004 queries

# query2004 = """
#     SELECT "2004constituencies"."ConstName", "2004constituencies"."RegName", "2004data_const".*
#         FROM public."2004data_const"
#         Join "2004constituencies" on "2004data_const"."ConstCode"="2004constituencies"."ConstCode";

# """

# df2004 = pd.read_sql(query2004, engine)

#print('this is df2a2012: ', df2a2012)

# ///////////////////////////


# POPULATION DEMOGRAPHICS


# /////////////////////////

queryPop = """
    SELECT "2020districts"."DistCode", "2020districts"."DistName", "2020districts"."RegCode", "2020regions"."RegName", "2020constituencies"."ConstName", "2020data_dist".*
        FROM public."2020data_dist"
        Join public."2020districts" on "2020data_dist"."ConstCode"="2020districts"."ConstCode"
        Join public."2020regions" on "2020districts"."RegCode"="2020regions"."RegCode"
        Join public."2020constituencies" on "2020districts"."ConstCode"="2020constituencies"."ConstCode";

"""

df3 = pd.read_sql(queryPop, engine)


#/////////////////////////////////


# F L A S H ____ D A T A


#/////////////////////////////////


# 2024

# FLASH REGION

# queryREGdf2024 = """
#     SELECT "2024regions"."RegName","2024flash_reg".* FROM public."2024flash_reg"
#     Join "2024regions" on "2024flash_reg"."RegCode"="2024regions"."RegCode";

# """

# flash_REGdf2024 = pd.read_sql(queryREGdf2024, engine)

# # FLASH CONSTITUENCY

# queryCONSTdf2024 = """
#     SELECT "2024regions"."RegName","2024regions"."RegCode","2024constituencies"."ConstName", "2024flash_const".* FROM 
#     public."2024flash_const"
#     Join "2024constituencies" on "2024flash_const"."ConstCode"="2024constituencies"."ConstCode"
#     Join "2024regions" on "2024constituencies"."RegCode"="2024regions"."RegCode";


# """

# flash_CONSTdf2024 = pd.read_sql(queryCONSTdf2024, engine)

# # FLASH POLLING STATION

# queryPSdf2024 = """
#     SELECT * FROM public."2024flash_ps"


# """

# flash_PSdf2024 = pd.read_sql(queryPSdf2024, engine)




# 2020

# FLASH REGION

queryREGdf2020 = """
    SELECT "2020regions"."RegName","2020flash_reg".* FROM public."2020flash_reg"
    Join public."2020regions" on "2020flash_reg"."RegCode"="2020regions"."RegCode";

"""

flash_REGdf2020 = pd.read_sql(queryREGdf2020, engine)

# FLASH CONSTITUENCY

queryCONSTdf2020 = """
    SELECT "2020regions"."RegName","2020regions"."RegCode","2020constituencies"."ConstName", "2020flash_const".* FROM 
    public."2020flash_const"
    Join public."2020constituencies" on "2020flash_const"."ConstCode"="2020constituencies"."ConstCode"
    Join public."2020regions" on "2020constituencies"."RegCode"="2020regions"."RegCode";


"""

flash_CONSTdf2020 = pd.read_sql(queryCONSTdf2020, engine)



# FLASH POLLING STATION

queryPSdf2020 = """
    SELECT * FROM public."2020flash_ps"


"""

flash_PSdf2020 = pd.read_sql(queryPSdf2020, engine)

flash_REGdf = flash_REGdf2020
flash_CONSTdf = flash_CONSTdf2020
flash_PSdf = flash_PSdf2020

#print(flash_REGdf)

#print(df2)
#print(df3)

#dfGroupH2 = df2.columns.tolist()[5:9]
#print(dfGroupH2)

# Convert WindowsPath object to string
data_loc_str = str(settings.DATA_LOC)


# query_ghana_regions = """
#     SELECT region, wkb_geometry
#     FROM public.ghana_regions

# """

# GHMap = gpd.read_postgis(query_ghana_regions, engine, geom_col='wkb_geometry')
# #print("From read_sql", GHMap)

# GHMap_json = GHMap.to_json()
# #print("From read_sql_json", ghana_regions_json)

# query_ghana_regions16 = """
#     SELECT region, wkb_geometry
#     FROM public.ghana_regions16

# """

# GHMap2 = gpd.read_postgis(query_ghana_regions16, engine, geom_col='wkb_geometry')
# GHMap2_json = GHMap2.to_json()

# query_polling_stations = """
#     SELECT "PS Code", "PS Name", "Plus code", "GhPostGPS", wkb_geometry
#     FROM public.polling_stations

# """

# GHMap_PS = gpd.read_postgis(query_polling_stations, engine, geom_col='wkb_geometry')
# GHMap_PS_json = GHMap_PS.to_json()


# query_2004_2008 = """
#     SELECT "ConstCode", "Constituen", "wkb_geometry"
#     FROM constituencies2004_2008

# """

# GHMapConst2 = gpd.read_postgis(query_2004_2008, engine, geom_col='wkb_geometry')


# query_2012_2020 = """
#     SELECT "ConstCode", "ConstCode16_12", "Constituen", "wkb_geometry"
#     FROM constituencies2012_2020_update

# """

# GHMapConst = gpd.read_postgis(query_2012_2020, engine, geom_col='wkb_geometry')


# query_2024 = """
#     SELECT "ConstCode", "Constituen", "wkb_geometry"
#     FROM constituencies2024

# """

# GHMapConst2024 = gpd.read_postgis(query_2024, engine, geom_col='wkb_geometry')



GHMap2 = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions16.json'))
GHMap = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions.geojson'))
GHMapConst = gpd.read_file(os.path.join(data_loc_str, 'images', 'constituencies2012_2020.geojson'))
GHMapConst2 = gpd.read_file(os.path.join(data_loc_str, 'images', 'constituencies2004_2008.geojson'))
GHMapConst2024 = gpd.read_file(os.path.join(data_loc_str, 'images', 'constituencies2024.geojson'))
GHMap_PS = gpd.read_file(os.path.join(data_loc_str, 'images', 'new_ps', 'new_ps2', 'polling_stations.geojson'))
GHMap_json = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions.geojson')).to_json()
GHMap2_json = gpd.read_file(os.path.join(data_loc_str, 'images', 'ghana_regions16.json')).to_json()
GHMap_PS_json = gpd.read_file(os.path.join(data_loc_str, 'images', 'new_ps', 'new_ps2', 'polling_stations.geojson')).to_json()
# print(f"This is df2:", df2)
# print(f"This is df2a:", df2a)

#def initialise_chart(year = '2020', region='Ashanti'):

    # Preprocessing of data
    
    
    # filename2 = year + '.csv' 
    # path2 = os.path.join(data_loc_str, 'EDATA', filename2)
    # df2 = gpd.read_file(path2)

    # filename3 = 'District_pop_demographics' + year + '.csv' 
    # path3 = os.path.join(data_loc_str, 'EDATA', filename3)
    # df3 = gpd.read_file(path3)

     # // Grouped according to Year and Office
    # grouped = df2.groupby(['YEAR', 'OFFICE'])
    # dfGroup = grouped.get_group((year, 'Parliament'))
    # dfGroup2 = grouped.get_group((year, 'Presidential First Round'))
    
    # groupedNewA = df2.groupby(['YEAR', 'OFFICE', 'REGION'])
    # dfGroupNew1 = groupedNewA.get_group((year, 'Parliament', region))
    # dfGroupNew1B = groupedNewA.get_group((year, 'Presidential First Round', region))

def initialise_chart(year = '2024', region='Ashanti', census='Total_Pop', electoral='valid_votes'):

    # RT
    # from .tasks import update_year_2024_data

    # update_year_2024_data.delay()

    # FLASH DATA

    #_________________

    # Define the year for filtering
    if int(year) <= 2020:
        # Use 2020 data if the year is less than or equal to 2020
        flash_REGdf = flash_REGdf2020
        flash_CONSTdf = flash_CONSTdf2020
        flash_PSdf = flash_PSdf2020
    else:
        # Modify queries to use the specific year
        queryREGdf = f"""
            SELECT "{year}regions"."RegName","{year}flash_reg".* 
                FROM public."{year}flash_reg"
                Join public."{year}regions" on "{year}flash_reg"."RegCode"="{year}regions"."RegCode";
            """
        queryCONSTdf = f"""
            SELECT "{year}regions"."RegName","{year}regions"."RegCode","{year}constituencies"."ConstName", "{year}flash_const".* 
                FROM public."{year}flash_const"
                Join public."{year}constituencies" on "{year}flash_const"."ConstCode"="{year}constituencies"."ConstCode"
                Join public."{year}regions" on "{year}constituencies"."RegCode"="{year}regions"."RegCode";
            """
        queryPSdf = f"""
            SELECT * 
                FROM public."{year}flash_ps";
            """

        # Fetch the data for the selected year
        flash_REGdf = pd.read_sql(queryREGdf, engine)
        flash_CONSTdf = pd.read_sql(queryCONSTdf, engine)
        flash_PSdf = pd.read_sql(queryPSdf, engine)
    

    #_________________

    global df

    # Define the list of election years including 2024
    years = [2004, 2008, 2009, 2012, 2016, 2020, 2024]

    current_year = int(year)
    previous_years = [y for y in years if y < current_year]

    #  For 2020 and beyond 

    query1 = """
    SELECT "{year}constituencies"."ConstName", "{year}regions"."RegName", "{year}data_const".*
        FROM public."{year}data_const"
        Join public."{year}constituencies" on "{year}data_const"."ConstCode"="{year}constituencies"."ConstCode"
        Join public."{year}regions" on "{year}constituencies"."RegCode"="{year}regions"."RegCode";

        """
    

    #dfA = pd.read_sql(query, engine)


    #For 2016 and below 

    query2 = """
    SELECT "{year}constituencies"."ConstName", "{year}constituencies"."RegName", "{year}data_const".*
        FROM public."{year}data_const"
        Join public."{year}constituencies" on "{year}data_const"."ConstCode"="{year}constituencies"."ConstCode";

        """

    # Query for the current year
    if current_year in [2020, 2024]:
        query = query1.format(year=current_year)
    else:
        query = query2.format(year=current_year)

    # if int(year) in [2020, 2024]:
    #     query = query1.format(year=year)
    # else:
    #     query = query2.format(year=year)
    
    df = pd.read_sql(query, engine)

    first_C_column_df = df.columns[df.columns.str.contains('_C')][0]

    df = df.loc[:, 'ConstName': first_C_column_df]
    # Fill all columns from 'rejected_votes' to just before 'first_C_column' with 0
    df.loc[:, 'reg_voters':first_C_column_df] = df.loc[:, 'reg_voters':first_C_column_df].apply(
        lambda col: col.fillna(0) if col.name != 'first_C_column' else col.fillna('No information provided')
    )

    # Fill all columns from 'rejected_votes' to just before 'first_C_column' with 0
    df.loc[:, 'reg_voters':first_C_column_df] = df.loc[:, 'reg_voters':first_C_column_df].apply(
        lambda col: col.fillna(0) if col.name != 'first_C_column' else col.fillna('No information provided')
    )

    #print(df)
    # df = df.astype({
    #     "Ward Number": "int8",
    #     "Voter ID": "int32",
    #     "Age": "float32",
    #     "First Name": "string",
    #     "Last Name": "string"
    # })

    # dfB = pd.read_sql(query2, engine)



    #////////////////////

    #  Flash Data

    #///////////////////

    # query3 = f"""
    #     SELECT "{year}regions"."RegName","{year}flash_reg".* FROM public."{year}flash_reg"
    #         Join "{year}regions" on "{year}flash_reg"."RegCode"="{year}regions"."RegCode";

    # """

    # flash_REGdf = pd.read_sql(query3, engine)

    # query4 = f"""
    #     SELECT "{year}regions"."RegName","{year}regions"."RegCode","{year}constituencies"."ConstName", "{year}flash_const".* FROM 
    #     public."{year}flash_const"
    #         Join "{year}constituencies" on "{year}flash_const"."ConstCode"="{year}constituencies"."ConstCode"
    #         Join "{year}regions" on "{year}constituencies"."RegCode"="{year}regions"."RegCode";


    # """

    # flash_CONSTdf = pd.read_sql(query4, engine)

    # query5 = f"""
    #     SELECT * FROM public."{year}flash_ps"


    # """

    # flash_PSdf = pd.read_sql(query5, engine)


    # if year == '2024':
    #     df = df2024
    # elif year == '2016':
    #     df = df2016
    # elif year == '2012':
    #     df = df2012
    # elif year == '2008':
    #     df = df2008
    # elif year == '2008_R':
    #     df = df2008_R
    # elif year == '2004':
    #     df = df2004
    # else:
    #     df = df2020



    # FLASH DATA

    # if year == '2024':
    #     flash_REGdf = flash_REGdf2024
    #     flash_CONSTdf = flash_CONSTdf2024
    #     flash_PSdf = flash_PSdf2024
    # elif year == '2020':
    #     flash_REGdf = flash_REGdf2020
    #     flash_CONSTdf = flash_CONSTdf2020
    #     flash_PSdf = flash_PSdf2020
    # else:
    #     pass

    #print(df['RegCode'])
    #df.info()


    grouped = df.groupby(['year_', 'office'])
    dfGroup = grouped.get_group((year, 'Parliamentary'))
    dfGroup2 = grouped.get_group((year, 'Presidential'))
    
    groupedNewA = df.groupby(['year_', 'office', 'RegName'])
    dfGroupNew1 = groupedNewA.get_group((year, 'Parliamentary', region))
    dfGroupNew1B = groupedNewA.get_group((year, 'Presidential', region))

    grouped2P = df3.groupby(['RegName'])
    if region in grouped2P.groups:
        dfGroup2P = grouped2P.get_group(region)
    else:
        print(f"Region '{region}' not found in grouped data.")
        # Handle the case for missing data (e.g., set dfGroup2P to None or some default value)
        dfGroup2P = None

    # GROUPING FLASH CONST BY REGION

    flash_CONSTdf2020_GROUPED = flash_CONSTdf2020.groupby(['RegName'])
    
    # Check if the region exists in the grouped data
    if region in flash_CONSTdf2020_GROUPED.groups:
        flash_CONSTdf2020_GROUPED_DONE = flash_CONSTdf2020_GROUPED.get_group(region)
        
        # Proceed with the merge if the group is found
        mergedFlashCONST_GHMap2_json = GHMapConst.merge(
            flash_CONSTdf2020_GROUPED_DONE, 
            left_on="ConstCode", 
            right_on="ConstCode"
        )
        
        # Convert merged result to JSON
        mergedFlashCONST_GHMap2 = mergedFlashCONST_GHMap2_json.to_json()

    else:
        print(f"Region '{region}' not found in grouped data.")
        
        # Handle missing region case
        mergedFlashCONST_GHMap2 = None  # Or set to a default value like empty JSON "{}"

    
    
    # =======================================


   
    #//____________________________//

    #//  ANALYSIS OF DATA [PANDAS]
    #//____________________________//

    # Function for Total VALID_VOTES 

    def total_valid_votes(dfGroup):
        first_C_column = dfGroup.columns[dfGroup.columns.str.contains('_C')][0]
        first_rejected_column = dfGroup.columns[dfGroup.columns.str.contains('rejected')][0]

        dfGroupA = dfGroup.loc[:,electoral:first_C_column]
        dfGroupA = dfGroupA.drop(columns=first_C_column)
        dfGroupA = dfGroupA.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        dfGroupA = dfGroupA.apply(pd.to_numeric)


        return dfGroupA

    # a = total_valid_votes(dfGroup2)
    # print(a)

    # Function for Total sum based on each region/constituency

    def total_valid_votes_levelBased(dfGroup, RegName, *args):
        # If args contains more than one column, you can select all at once
        columns = [RegName] + list(args) + [electoral]  # Add 'electoral' to the columns to be used
        
        # Select the required columns
        dfRegions = dfGroup[columns].copy()
        
        # Clean the 'electoral' column by removing commas and converting it to an integer
        dfRegions[electoral] = dfRegions[electoral].replace(',', '', regex=True).fillna(0).astype(int)

        if args:
            dfRegionsSum = dfRegions
        else:
            # Group by the `RegName` column and sum the 'electoral' values
            dfRegionsSum = dfRegions.groupby(by=[RegName])[electoral].sum().reset_index()
        
        # Sorting the results in descending order by 'electoral'
        dfRegionsSum = dfRegionsSum.sort_values(by=electoral, ascending=False)
        
        return dfRegionsSum, dfRegions


    def total_valid_votes_parties(dfGroup):
        first_C_column = dfGroup.columns[dfGroup.columns.str.contains('_C')][0]
        first_rejected_column = dfGroup.columns[dfGroup.columns.str.contains('rejected')][0]
        dfGroupC = dfGroup.loc[:,first_rejected_column:first_C_column]
        dfGroupC = dfGroupC.drop(columns=[first_rejected_column, first_C_column])
        dfGroupC = dfGroupC.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        dfGroupC = dfGroupC.apply(pd.to_numeric) # Converting all the string in the columns to integers
        #print('yeah', dfGroupC)
        tSumC = dfGroupC.sum().reset_index() # Sum operation on a specific column

        return tSumC


    def total_valid_votes_parties_levelBased(dfRegions, dfGroupA, RegName, *args):
        # Concatenate dfRegions and dfGroupA
        data = [dfRegions, dfGroupA]
        dfMerge = pd.concat(data, axis=1, join='inner')
        dfGroupG = dfMerge
        df_cleanmodified = dfGroupG.loc[:, ~dfGroupG.columns.duplicated()]

        df_clean = df_cleanmodified.copy()

        # Check if args contains any additional grouping columns
        if args:
            # Skip grouping and summing, use df_clean as-is
            numeric_columns = df_clean.columns[2:]  # Adjusting this to the range of actual numeric columns
            df_clean[numeric_columns] = df_clean[numeric_columns].apply(pd.to_numeric, errors='coerce')
            df_grouped3 = df_clean
            
        else:
            # Group by RegName and sum the numeric columns
            numeric_columns = df_clean.columns[1:]  # Adjusting this to the range of actual numeric columns
            df_clean[numeric_columns] = df_clean[numeric_columns].apply(pd.to_numeric, errors='coerce')
            df_grouped3 = df_clean.groupby(by=RegName)[numeric_columns].sum().reset_index()
            

        # Extract the first rejected column and prepare data for further analysis
        first_rejected_column3 = df_grouped3.columns[df_grouped3.columns.str.contains('rejected')][0]
        graph3AY = df_grouped3.loc[:, first_rejected_column3:]
        graph3AY = graph3AY.drop(columns=first_rejected_column3)
        graph3AX = df_grouped3[RegName].values.tolist()

        # Clean and prepare data
        # Drop 'rejected_votes' and 'valid_votes' columns only if they exist
        columns_to_drop = [col for col in ['rejected_votes', 'valid_votes'] if col in df_grouped3.columns]
        df_grouped3z = df_grouped3.drop(columns=columns_to_drop)
        df_grouped3z.fillna(0, inplace=True)
        df_grouped3z = df_grouped3z.values.tolist()

        # Add 'Values' and 'Second_Highest_Value' columns
        df_grouped3['Values'] = graph3AY.apply(max, axis=1)
        df_grouped3['Second_Highest_Value'] = graph3AY.apply(lambda row: sorted(row)[-2], axis=1)

        # Find Winners and Second Highest Value Name
        #df_grouped3['Winner'] = graph3AY.idxmax(axis=1)

        def assign_winner(row):
            if row.isna().all() or (row == 0).all():  # Check if all values are NaN or 0
                return "No winner"
            else:
                return row.idxmax()  # Return the party with the highest value (idxmax)

        # Apply the function to each row in the DataFrame to assign the winner
        df_grouped3['Winner'] = graph3AY.apply(assign_winner, axis=1)

        # Function to assign the second-highest value name
        def assign_second_highest(row):
            # Check for "No winner" condition (all values are NaN or 0)
            if row.isna().all() or (row == 0).all():  # If all values are NaN or 0
                return "No second place"
            elif row.nunique() == 1:  # If all values are identical (no second place)
                return "No second place"
            else:
                # Drop the max value and return the index of the second-highest
                return row.drop(row.idxmax()).idxmax()

        # Apply the function to assign the second-highest value name
        df_grouped3['Second_Highest_Value_Name'] = graph3AY.apply(assign_second_highest, axis=1)
        
        # Calculate total and percentages
        df_grouped3['Total'] = graph3AY.sum(axis=1)
        df_grouped3['Winner_Percentage'] = (df_grouped3['Values'] / df_grouped3['Total'] * 100).round(2)

        # Replace NaN values with 'No winner'
        df_grouped3['Winner_Percentage'] = df_grouped3['Winner_Percentage'].fillna(0)

        df_grouped3['Second_Highest_Percentage'] = (df_grouped3['Second_Highest_Value'] / df_grouped3['Total'] * 100).round(2)

        # Replace NaN values with 'No winner'
        df_grouped3['Second_Highest_Percentage'] = df_grouped3['Second_Highest_Percentage'].fillna(0)

        # Define a color mapping dictionary for each party
        value_mapping = {'NPP': 10, 'NDC': 8, 'CPP': 5, 'No winner': 3}
        df_grouped3['Values_map'] = df_grouped3['Winner'].map(value_mapping)

        # Adjust the RegName and args in values_dict
        if args:
            # If there is an arg, use it as the index and include RegName in the columns
            index_column = args[0]
            values_dict = df_grouped3.set_index(index_column)[[RegName, "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
        else:
            # If no arg, use RegName as the index and don't include it in the columns
            values_dict = df_grouped3.set_index(RegName)[["Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]

        return values_dict, df_grouped3z, graph3AX


    # Looping to get the winners for the various years

    def prev_wins_reg(office, values_dict):

        # Loop through previous years and fetch their winners
        for prev_year in previous_years:
            # Select the appropriate query based on the previous year
            if prev_year in [2020, 2024]:
                query_prev = query1.format(year=prev_year)
            else:
                query_prev = query2.format(year=prev_year)

            # Fetch data for the previous year
            df_prev = pd.read_sql(query_prev, engine)

            df_prev['year_'] = df_prev['year_'].astype(int)
            grouped_prev = df_prev.groupby(['year_', 'office'])
            dfGroup_prev = grouped_prev.get_group((prev_year, office))
            

            # Assuming similar structure in previous years
            # grouped_prev = df_prev.groupby(['year_', 'office', 'RegName'])
            # dfGroupPrev = grouped_prev.get_group((prev_year, 'Parliamentary', region))

            dfGroupA_prev = total_valid_votes(dfGroup_prev)
            dfRegions_prev = total_valid_votes_levelBased(dfGroup_prev, 'RegName')[1]

            # Get the winners for this previous year
            values_dict_prev = total_valid_votes_parties_levelBased(dfRegions_prev, dfGroupA_prev, "RegName")[0]
            #print(values_dict_prev)
            # Merge the previous year's winners with the current year's values_dict
            values_dict[f"Winner_{prev_year}"] = values_dict_prev['Winner']

            # Replace NaN values with 'No winner'
            values_dict[f"Winner_{prev_year}"] = values_dict[f"Winner_{prev_year}"].fillna("No winner")

            # Merge the previous year's winner percentage with the current year's values_dict
            values_dict[f"Winner_Percentage_{prev_year}"] = values_dict_prev['Winner_Percentage']

            # Replace NaN values with zero
            values_dict[f"Winner_Percentage_{prev_year}"] = values_dict[f"Winner_Percentage_{prev_year}"].fillna(0)
            #print(values_dict)

        return values_dict


    def prev_wins_const(office, values_dict):
        # Loop through previous years and fetch their winners
        for prev_year in previous_years:
            # Select the appropriate query based on the previous year
            if prev_year in [2020, 2024]:
                query_prev = query1.format(year=prev_year)
            else:
                query_prev = query2.format(year=prev_year)

            # Fetch data for the previous year
            df_prev = pd.read_sql(query_prev, engine)
            df_prev['year_'] = df_prev['year_'].astype(int)

            # Group data by year, office, and region
            grouped_prev = df_prev.groupby(['year_', 'office'])

            # Check if the group exists
            if (prev_year, office) in grouped_prev.groups:
                # If the group exists, fetch it
                dfGroup_prev = grouped_prev.get_group((prev_year, office))

                # Apply further transformations
                dfGroupA_prev = total_valid_votes(dfGroup_prev)
                dfRegions_prev = total_valid_votes_levelBased(dfGroup_prev, 'ConstName', 'ConstCode')[1]

                # Get the winners for this previous year
                values_dict_prev = total_valid_votes_parties_levelBased(dfRegions_prev, dfGroupA_prev, "ConstName", "ConstCode")[0]
                
                # Merge the previous year's winners with the current year's values_dict
                values_dict[f"Winner_{prev_year}"] = values_dict_prev['Winner']

                # Replace NaN values with 'No winner'
                values_dict[f"Winner_{prev_year}"] = values_dict[f"Winner_{prev_year}"].fillna("No winner")

                # Merge the previous year's winner percentage with the current year's values_dict
                values_dict[f"Winner_Percentage_{prev_year}"] = values_dict_prev['Winner_Percentage']

                # Replace NaN values with zero
                values_dict[f"Winner_Percentage_{prev_year}"] = values_dict[f"Winner_Percentage_{prev_year}"].fillna(0)
                
            else:
                # Handle missing group, e.g., log, skip, or assign default values
                print(f"No data for year: {prev_year}, office: {office}")
                values_dict[f"Winner_{prev_year}"] = "No data"
            

        return values_dict



    def prev_wins_const_grouped(office, values_dict):
        # Loop through previous years and fetch their winners
        for prev_year in previous_years:
            # Select the appropriate query based on the previous year
            if prev_year in [2020, 2024]:
                query_prev = query1.format(year=prev_year)
            else:
                query_prev = query2.format(year=prev_year)

            # Fetch data for the previous year
            df_prev = pd.read_sql(query_prev, engine)
            df_prev['year_'] = df_prev['year_'].astype(int)

            # Group data by year, office, and region
            grouped_prev = df_prev.groupby(['year_', 'office', 'RegName'])

            # Check if the group exists
            if (prev_year, office, region) in grouped_prev.groups:
                # If the group exists, fetch it
                dfGroup_prev = grouped_prev.get_group((prev_year, office, region))

                # Apply further transformations
                dfGroupA_prev = total_valid_votes(dfGroup_prev)
                dfRegions_prev = total_valid_votes_levelBased(dfGroup_prev, 'ConstName', 'ConstCode')[1]

                # Get the winners for this previous year
                values_dict_prev = total_valid_votes_parties_levelBased(dfRegions_prev, dfGroupA_prev, "ConstName", "ConstCode")[0]
                
                # Merge the previous year's winners with the current year's values_dict
                values_dict[f"Winner_{prev_year}"] = values_dict_prev['Winner']

                # Replace NaN values with 'No winner'
                values_dict[f"Winner_{prev_year}"] = values_dict[f"Winner_{prev_year}"].fillna("No winner")

                # Merge the previous year's winner percentage with the current year's values_dict
                values_dict[f"Winner_Percentage_{prev_year}"] = values_dict_prev['Winner_Percentage']

                # Replace NaN values with zero
                values_dict[f"Winner_Percentage_{prev_year}"] = values_dict[f"Winner_Percentage_{prev_year}"].fillna(0)

            else:
                # Handle missing group, e.g., log, skip, or assign default values
                print(f"No data for year: {prev_year}, office: {office}, region: {region}")
                values_dict[f"Winner_{prev_year}"] = "No data"

        return values_dict





    # // Finding the Total VALID_VOTES votes on Parliament (A)
    # Find the first column that contains '_C'
    # first_C_column = dfGroup.columns[dfGroup.columns.str.contains('_C')][0]
    # first_rejected_column = dfGroup.columns[dfGroup.columns.str.contains('rejected')][0]

    # #print(first_rejected_column)

    # dfGroupA = dfGroup.loc[:,electoral:first_C_column]
    # dfGroupA = dfGroupA.drop(columns=first_C_column)
    # #print(dfGroupA)
    # dfGroupA = dfGroupA.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupA = dfGroupA.apply(pd.to_numeric) # Converting all the string in the columns to integers

    dfGroupA = total_valid_votes(dfGroup)
    #print(a)
    tSum = dfGroupA[electoral].sum().astype(int).tolist() # Sum operation on a specific column
    #print(tSum)

    # // Finding the Total VALID_VOTES votes on Presidential (A)
    # first_C_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('_C')][0]
    # first_rejected_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('rejected')][0]

    # dfGroupB = dfGroup2.loc[:,electoral:first_C_column2]
    # dfGroupB = dfGroupB.drop(columns=first_C_column2)
    # dfGroupB = dfGroupB.replace(',','', regex=True)
    # dfGroupB = dfGroupB.apply(pd.to_numeric)
    dfGroupB = total_valid_votes(dfGroup2)
    #print(b)
    tSum2 = dfGroupB[electoral].sum().astype(int).tolist()
    #print(tSum2)
    #print(dfGroupB)

    # // Finding the Total sum based on each region for Parliament (B)
    # dfRegions = dfGroup[["RegName", electoral]].copy()
    # dfRegions[electoral] = dfRegions[electoral].replace(',','', regex=True)
    # dfRegions[electoral] = dfRegions[electoral].astype('int')
    # dfRegionsSum = dfRegions.groupby(by=["RegName"])[electoral].sum().reset_index()

    # # Sorting in descending order
    # dfRegionsSum = dfRegionsSum.sort_values(by=electoral, ascending=False)

    dfRegions = total_valid_votes_levelBased(dfGroup, 'RegName')[1]
    dfRegionsSum = total_valid_votes_levelBased(dfGroup, 'RegName')[0]
    # cax = c['RegName'].values.tolist()
    # cay = c[electoral]
    #print(cax)
    #print(cay)
    graph1AX = dfRegionsSum['RegName'].values.tolist()
    graph1AY = dfRegionsSum[electoral].values.astype(int).tolist()
    #print(graph1AX)
    #print(graph1AY)

    # // Finding the Total sum based on each region for Presidential (B)
    # dfRegions2 = dfGroup2[["RegName", electoral]].copy()
    # dfRegions2[electoral] = dfRegions2[electoral].replace(',','', regex=True)
    # dfRegions2[electoral] = dfRegions2[electoral].astype('int')
    # dfRegionsSum2 = dfRegions2.groupby(by=["RegName"])[electoral].sum().reset_index()

    # dfRegionsSum2 = dfRegionsSum2.sort_values(by=electoral, ascending=False)

    dfRegions2 = total_valid_votes_levelBased(dfGroup2, 'RegName')[1]

    dfRegionsSum2 = total_valid_votes_levelBased(dfGroup2, 'RegName')[0]

    graph1BX = dfRegionsSum2['RegName'].values.tolist()
    graph1BY = dfRegionsSum2[electoral].values.astype(int).tolist()
    #print(graph1BX)

    # // Do Total sum operations for each party on Parliament (C)
    # dfGroupC = dfGroup.loc[:,first_rejected_column:first_C_column]
    # dfGroupC = dfGroupC.drop(columns=[first_rejected_column, first_C_column])
    # dfGroupC = dfGroupC.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupC = dfGroupC.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # #print('yeah', dfGroupC)
    # tSumC = dfGroupC.sum().reset_index() # Sum operation on a specific column
    tSumC = total_valid_votes_parties(dfGroup)
    graph2AX = tSumC['index'].values.astype(str).tolist()
    graph2AY = tSumC[0].values.astype(int).tolist()
    #print(dfGroupC)

    # // Do Total sum operations for each party on Presidential (C)
    # dfGroupD = dfGroup2.loc[:,first_rejected_column2:first_C_column2]
    # dfGroupD = dfGroupD.drop(columns=[first_rejected_column2, first_C_column2])
    # dfGroupD = dfGroupD.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupD = dfGroupD.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # tSumD = dfGroupD.sum().reset_index() # Sum operation on a specific column
    tSumD = total_valid_votes_parties(dfGroup2)
    tSumDParties = tSumD.sort_values(by=0, ascending=False)
    graph2BXParties = tSumDParties['index'].values.astype(str).tolist()
    graph2BYParties = tSumDParties[0].values.astype(int).tolist()
    graph2BX = tSumD['index'].values.astype(str).tolist()
    graph2BY = tSumD[0].values.astype(int).tolist()
    #print(graph2BX)

    # // Do the sum operations of each region on each party for both offices Parliament (D)
    # data = [dfRegions, dfGroupA]
    # dfMerge = pd.concat(data, axis=1, join='inner')
    # dfGroupG = dfMerge
    # df_cleanmodified = dfGroupG.loc[:, ~dfGroupG.columns.duplicated()]
    # df_clean = df_cleanmodified.copy()

    # #Ensuring column types are numeric where needed (for summing)
    # numeric_columns = df_clean.columns[1:]  # Adjusting this to my actual range of numeric columns
    # df_clean[numeric_columns] = df_clean[numeric_columns].apply(pd.to_numeric, errors='coerce')
    # #dfGroupG = dfGroupG.apply(pd.to_numeric)
    # df_grouped3 = df_clean.groupby(by="RegName")[numeric_columns].sum().reset_index()
    # #print(df_grouped3)

    # first_rejected_column3 = df_grouped3.columns[df_grouped3.columns.str.contains('rejected')][0]

    # graph3AY = df_grouped3.loc[:,first_rejected_column3:]
    # graph3AY = graph3AY.drop(columns=first_rejected_column3)
    # #print(graph3AY)
    # graph3AYes = graph3AY

    # #print(graph3AYes)

    # graph3AY = graph3AY.values.tolist()
    # #print(graph3AY)
    # graph3AX = df_grouped3['RegName'].values.tolist()
    # df_grouped3z = df_grouped3.drop(columns=['rejected_votes','valid_votes'])
    # df_grouped3z.fillna(0, inplace=True) 
    # df_grouped3z = df_grouped3z.values.tolist()
    # # b = df_grouped3


    # # Add a new 'values' column containing the highest value for each region
    # df_grouped3['Values'] = graph3AYes.apply(max, axis=1)
    # #print('Values', df_grouped3)
    # #print('Values', df_grouped3[numeric_columns])

    # # Find the second highest value in each row
    # df_grouped3['Second_Highest_Value'] = graph3AYes.apply(lambda row: sorted(row)[-2], axis=1)
    # #print('Second_Highest_Value', df_grouped3)

    # # Create a new column "Winners" with the name of the column having the maximum value
    # df_grouped3['Winner'] = graph3AYes.idxmax(axis=1)
    # #print('Winner', df_grouped3)
    # #print(df_grouped3)

    #  # Find the name associated with the second highest value in each row
    # df_grouped3['Second_Highest_Value_Name'] = graph3AYes.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)
    # #print('Second_Highest_Value_Name', df_grouped3)
    # # Find the total sum of values in each row
    # df_grouped3['Total'] = graph3AYes.sum(axis=1)

    # # Calculate the percentage of the highest value
    # df_grouped3['Winner_Percentage'] = (df_grouped3['Values'] / df_grouped3['Total'] * 100).round(2)

    # # Calculate the percentage of the second highest value
    # df_grouped3['Second_Highest_Percentage'] = (df_grouped3['Second_Highest_Value'] / df_grouped3['Total'] * 100).round(2)

    # # Define a color mapping dictionary for each party
    # value_mapping = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # # Create a new 'colors' column based on the 'Winners' column
    # df_grouped3['Values_map'] = df_grouped3['Winner'].map(value_mapping)

    # values_dict = df_grouped3.set_index("RegName")[["Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    
    values_dict, df_grouped3z, graph3AX = total_valid_votes_parties_levelBased(dfRegions, dfGroupA, "RegName")
    values_dict = prev_wins_reg('Parliamentary', values_dict)

    #values_dict.info()
    
    
    #print(values_dict)

    # // Do the sum operations of each region on each party for both offices Presidential (D)
    # data1 = [dfRegions2, dfGroupB]
    # dfMergeB = pd.concat(data1, axis=1, join='inner')
    # dfGroupE = dfMergeB
    # df_clean2modified = dfGroupE.loc[:, ~dfGroupE.columns.duplicated()]
    # df_clean2 = df_clean2modified.copy()

    # #Ensuring column types are numeric where needed (for summing)
    # numeric_columns2 = df_clean2.columns[1:]  # Adjusting this to my actual range of numeric columns
    # df_clean2[numeric_columns2] = df_clean2[numeric_columns2].apply(pd.to_numeric, errors='coerce')
    # #dfGroupE = dfGroupE
    # df_grouped4 = df_clean2.groupby(by="RegName")[numeric_columns2].sum().reset_index()
    # #print(df_grouped4)


    # first_rejected_column4 = df_grouped4.columns[df_grouped4.columns.str.contains('rejected')][0]

    # graph4AY = df_grouped4.loc[:,first_rejected_column4:]
    # graph4AY = graph4AY.drop(columns=first_rejected_column4)
    # #print(graph4AY)
    # graph4AYes = graph4AY



    # graph3BY = df_grouped4.iloc[:,3:].values.tolist()
    # graph3BX = df_grouped4['RegName'].values.tolist()
    # df_grouped4z = df_grouped4.drop(columns=['rejected_votes','valid_votes'])
    # df_grouped4z.fillna(0, inplace=True) 
    # #print(df_grouped4z)
    # df_grouped4z = df_grouped4z.values.tolist()
    

    # # Add a new 'values' column containing the highest value for each region
    # df_grouped4['Values'] = graph4AYes.apply(max, axis=1)

    # # Find the second highest value in each row
    # df_grouped4['Second_Highest_Value'] = graph4AYes.apply(lambda row: sorted(row)[-2], axis=1)

    # df_grouped4['Winner'] = graph4AYes.idxmax(axis=1)

    #  # Find the name associated with the second highest value in each row
    # df_grouped4['Second_Highest_Value_Name'] = graph4AYes.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # # Find the total sum of values in each row
    # df_grouped4['Total'] = graph4AYes.sum(axis=1)

    # # Calculate the percentage of the highest value
    # df_grouped4['Winner_Percentage'] = (df_grouped4['Values'] / df_grouped4['Total'] * 100).round(2)

    # # Calculate the percentage of the second highest value
    # df_grouped4['Second_Highest_Percentage'] = (df_grouped4['Second_Highest_Value'] / df_grouped4['Total'] * 100).round(2)

    # # Define a color mapping dictionary for each party
    # value_mappings = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # # Create a new 'colors' column based on the 'Winners' column
    # df_grouped4['Values_map_4'] = df_grouped4['Winner'].map(value_mappings)

    # values_dict4 = df_grouped4.set_index("RegName")[["Values_map_4", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]

    values_dict4, df_grouped4z, graph3BX = total_valid_votes_parties_levelBased(dfRegions2, dfGroupB, "RegName")
    values_dict4 = prev_wins_reg('Presidential', values_dict4)

    # ---------------------------------

    # //   CONSTITUENCY LEVEL ////

    # _________________________________

    # // Finding the Total VALID_VOTES Constituency on Parliament (A)
    # first_C_columnNew = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('_C')][0]
    # first_rejected_columnNew = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('rejected')][0]
    # first_rejected_columnNew1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('rejected')][0]

    # dfGroupAC = dfGroupNew1.loc[:,electoral:first_C_columnNew]
    # dfGroupAC = dfGroupAC.drop(columns=first_C_columnNew)
    # dfGroupAC = dfGroupAC.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupAC = dfGroupAC.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfGroupAC = total_valid_votes(dfGroupNew1)
    #print(dfGroupAC)
    tSumR = dfGroupAC[electoral].values.sum().astype(int).tolist() # Sum operation on a specific column
    #print(tSumR)
    
    
    # // Finding the Total VALID_VOTES Constituency on Presidential (A)
    # first_C_columnNew1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('_C')][0]
    # dfGroupBC = dfGroupNew1B.loc[:,electoral:first_C_columnNew1B]
    # dfGroupBC = dfGroupBC.drop(columns=first_C_columnNew1B)
    # dfGroupBC =  dfGroupBC.replace(',','', regex=True)
    # dfGroupBC = dfGroupBC.apply(pd.to_numeric)
    dfGroupBC = total_valid_votes(dfGroupNew1B)
    tSum2R = dfGroupBC[electoral].sum().astype(int).tolist()
    #print(tSum2R)

     # // Have a column holding the sum operations of each constituency based on each region(Ashanti)Parliament for both offices (B)
    # dfConst = dfGroupNew1[["ConstName", electoral]].copy()
    # dfConst[electoral] = dfConst[electoral].replace(',','', regex=True)
    # dfConst[electoral] = dfConst[electoral].astype('int')
    # dfConst = dfConst.sort_values(by=electoral, ascending=False)
    dfConst = total_valid_votes_levelBased(dfGroupNew1, 'ConstName')[0]
    graphSub1AX = dfConst['ConstName'].values.tolist()
    graphSub1AY = dfConst[electoral].values.tolist()
    #print(graphSub1AY)
    
    
    # // Have a column holding the sum operations of each constituency based on each region(Ashanti) Presidential for both offices (B)
    # dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
    # dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
    # dfConst1B[electoral] = dfConst1B[electoral].astype('int')
    # dfConst1B = dfConst1B.sort_values(by=electoral, ascending=False)
    dfConst1B = total_valid_votes_levelBased(dfGroupNew1B, 'ConstName')[0]
    graphSub1BX = dfConst1B['ConstName'].values.tolist()
    graphSub1BY = dfConst1B[electoral].values.tolist()
    # print(graphSub1AY)

    # // Do Total sum operations for each party on Parliament CONSTITUENCY (C)
    # dfGroupCP = dfGroupNew1.loc[:,first_rejected_columnNew:first_C_columnNew]
    # dfGroupCP = dfGroupCP.drop(columns=[first_rejected_columnNew, first_C_columnNew])
    # dfGroupCP = dfGroupCP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupCP = dfGroupCP.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # tSumCP = dfGroupCP.sum().reset_index() # Sum operation on a specific column
    tSumCP = total_valid_votes_parties(dfGroupNew1)
    graph2AXP = tSumCP['index'].values.astype(str).tolist()
    graph2AYP = tSumCP[0].values.astype(int).tolist()
    #print(graph2AXP)
    
    # // Do Total sum operations for each party on Presidential CONSTITUENCY (C)
    # dfGroupDP = dfGroupNew1B.loc[:,first_rejected_columnNew1B:first_C_columnNew1B]
    # dfGroupDP = dfGroupDP.drop(columns=[first_rejected_columnNew1B, first_C_columnNew1B])
    # dfGroupDP = dfGroupDP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroupDP = dfGroupDP.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # tSumDP = dfGroupDP.sum().reset_index() # Sum operation on a specific column
    tSumDP = total_valid_votes_parties(dfGroupNew1B)
    graph2BXP = tSumDP['index'].values.astype(str).tolist()
    graph2BYP = tSumDP[0].values.astype(int).tolist()
    #print(graph2BXP)
    
    
    # // (D) Ashanti(Parliament) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Parliament
    # dfGroup1A = dfGroupNew1.loc[:,electoral:first_C_columnNew]
    # dfGroup1A = dfGroup1A.drop(columns=first_C_columnNew)
    # dfGroup1A = dfGroup1A.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroup1A = dfGroup1A.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # #print('ME:',dfGroup1A)
    # dfConst = dfGroupNew1[["ConstName", "ConstCode", electoral]]
    dfConst = total_valid_votes_levelBased(dfGroupNew1, 'ConstName', 'ConstCode')[1]
    #print(dfConst)
    #print(dfConstZZ)
    # data1A = [dfConst, dfGroup1A]
    # dfMerge1A = pd.concat(data1A, axis=1, join='inner')

    # df_cleanCmodified = dfMerge1A.loc[:, ~dfMerge1A.columns.duplicated()]
    # df_cleanC = df_cleanCmodified.copy()

    # #print(df_cleanC)

    # #Ensuring column types are numeric where needed (for summing)
    # numeric_columnsC = df_cleanC.columns[2:]  # Adjusting this to my actual range of numeric columns
    # df_cleanC[numeric_columnsC] = df_cleanC[numeric_columnsC].apply(pd.to_numeric, errors='coerce')


    # # first_rejected_columnC = df_cleanC.columns[df_cleanC.columns.str.contains('rejected')][0]

    # # dfGroupG1A = df_cleanC.loc[:,first_rejected_columnC:]
    # # dfGroupG1A = dfGroupG1A.drop(columns=first_rejected_columnC)


    # # #print(dfMerge1A)
    # # dfGroupG1A = dfGroupG1A.replace(',','', regex=True)
    # # dfGroupG1A = dfGroupG1A.apply(pd.to_numeric)
    # #df_grouped3_1A = df_cleanC.groupby(by="ConstCode")[numeric_columnsC].sum().reset_index()
    # #print(df_grouped3_1A)


    # first_rejected_column3_1A = df_cleanC.columns[df_cleanC.columns.str.contains('rejected')][0]

    # graph4AY_3_1A = df_cleanC.loc[:,first_rejected_column3_1A:]
    # graph4AY_3_1A = graph4AY_3_1A.drop(columns=first_rejected_column3_1A)
    # #print(graph4AY)
    # graph4AYes_3_1A = graph4AY_3_1A




    # graph3AY_1A = df_cleanC.iloc[:,4:]
    # #print(graph3AY_1A)
    # graph3AX_1A=df_cleanC.ConstName
    # df_grouped3zP = df_cleanC.drop(columns=['rejected_votes','valid_votes'])
    # df_grouped3zP.fillna(0, inplace=True)
    # #print(df_grouped3_1A)
    # df_grouped3zP = df_grouped3zP.values.tolist()
    # #print(df_grouped3_1A.CONSTITUENCY)

    #  # Add a new 'values' column containing the highest value for each region
    # df_cleanC['Values'] = graph4AYes_3_1A.apply(max, axis=1)

    # # Find the second highest value in each row
    # df_cleanC['Second_Highest_Value'] = graph4AYes_3_1A.apply(lambda row: sorted(row)[-2], axis=1)

    # df_cleanC['Winner'] = graph4AYes_3_1A.idxmax(axis=1)

    #  # Find the name associated with the second highest value in each row
    # df_cleanC['Second_Highest_Value_Name'] = graph4AYes_3_1A.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # # Find the total sum of values in each row
    # df_cleanC['Total'] = graph4AYes_3_1A.sum(axis=1)

    # # Calculate the percentage of the highest value
    # df_cleanC['Winner_Percentage'] = (df_cleanC['Values'] / df_cleanC['Total'] * 100).round(2)

    # # Calculate the percentage of the second highest value
    # df_cleanC['Second_Highest_Percentage'] = (df_cleanC['Second_Highest_Value'] / df_cleanC['Total'] * 100).round(2)

    # value_mappingConstA = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # # Create a new 'colors' column based on the 'Winners' column
    # df_cleanC['Values_map'] = df_cleanC['Winner'].map(value_mappingConstA)
    # #print(df_cleanC)

    # values_dictConstA = df_cleanC.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    #print(values_dictConstA)

    values_dictConstA, df_grouped3zP, graph3AX_1A = total_valid_votes_parties_levelBased(dfConst, dfGroupAC, "ConstName", "ConstCode")
    values_dictConstA = prev_wins_const_grouped('Parliamentary', values_dictConstA)
    #print(values_dictConstA)

    # // (D) Ashanti(Presidential) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Presidential
    # dfGroup1B = dfGroupNew1B.loc[:,electoral:first_C_columnNew1B]
    # dfGroup1B = dfGroup1B.drop(columns=first_C_columnNew1B)
    # dfGroup1B = dfGroup1B.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    # dfGroup1B = dfGroup1B.apply(pd.to_numeric) # Converting all the string in the columns to integers
    # dfConstB = dfGroupNew1B[["ConstName", "ConstCode", electoral]]
    dfConstB = total_valid_votes_levelBased(dfGroupNew1B, 'ConstName', 'ConstCode')[1]
    # data1B = [dfConstB, dfGroup1B]
    # dfMerge1B = pd.concat(data1B, axis=1, join='inner')

    # df_cleanC2modified = dfMerge1B.loc[:, ~dfMerge1B.columns.duplicated()]
    # df_cleanC2 = df_cleanC2modified.copy()

    # #Ensuring column types are numeric where needed (for summing)
    # numeric_columnsC2 = df_cleanC2.columns[2:]  # Adjusting this to my actual range of numeric columns
    # df_cleanC2[numeric_columnsC2] = df_cleanC2[numeric_columnsC2].apply(pd.to_numeric, errors='coerce')


    # # first_rejected_columnC2 = df_cleanC2.columns[df_cleanC2.columns.str.contains('rejected')][0]

    # # dfGroupG1B = df_cleanC2.loc[:,first_rejected_columnC2:]
    # # dfGroupG1B = dfGroupG1B.drop(columns=first_rejected_columnC2)



    # # #print(df2)
    # # dfGroupG1B = dfGroupG1B.replace(',','', regex=True)
    # # dfGroupG1B = dfGroupG1B.apply(pd.to_numeric)
    # #df_cleanC2 = df_cleanC2.groupby(by="ConstCode")[numeric_columnsC2].sum().reset_index()



    # first_rejected_column3_1B = df_cleanC2.columns[df_cleanC2.columns.str.contains('rejected')][0]

    # graph4AY_3_1B = df_cleanC2.loc[:,first_rejected_column3_1B:]
    # graph4AY_3_1B = graph4AY_3_1B.drop(columns=first_rejected_column3_1B)
    # #print(graph4AY)
    # graph4AYes_3_1B = graph4AY_3_1B




    # graph3AY_1B = df_cleanC2.iloc[:,4:]
    # graph3AX_1B=df_cleanC2.ConstName
    # df_grouped3zP2 = df_cleanC2.drop(columns=['rejected_votes','valid_votes'])
    # df_grouped3zP2.fillna(0, inplace=True)
    # #print(df_grouped3zP2)
    # df_grouped3zP2 = df_grouped3zP2.values.tolist()
    # #print(df_grouped3_1B.CONSTITUENCY)

    #  # Add a new 'values' column containing the highest value for each region
    # df_cleanC2['Values'] = graph4AYes_3_1B.apply(max, axis=1)

    # # Find the second highest value in each row
    # df_cleanC2['Second_Highest_Value'] = graph4AYes_3_1B.apply(lambda row: sorted(row)[-2], axis=1)

    # df_cleanC2['Winner'] = graph4AYes_3_1B.idxmax(axis=1)

    #  # Find the name associated with the second highest value in each row
    # df_cleanC2['Second_Highest_Value_Name'] = graph4AYes_3_1B.apply(lambda row: row.drop(row.idxmax()).idxmax(), axis=1)

    # # Find the total sum of values in each row
    # df_cleanC2['Total'] = graph4AYes_3_1B.sum(axis=1)

    # # Calculate the percentage of the highest value
    # df_cleanC2['Winner_Percentage'] = (df_cleanC2['Values'] / df_cleanC2['Total'] * 100).round(2)

    # # Calculate the percentage of the second highest value
    # df_cleanC2['Second_Highest_Percentage'] = (df_cleanC2['Second_Highest_Value'] / df_cleanC2['Total'] * 100).round(2)

    # value_mappingConstB = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # # Create a new 'colors' column based on the 'Winners' column
    # df_cleanC2['Values_map'] = df_cleanC2['Winner'].map(value_mappingConstB)

    # values_dictConstB = df_cleanC2.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    #print(values_dictConstB)

    values_dictConstB, df_grouped3zP2, graph3AX_1B = total_valid_votes_parties_levelBased(dfConstB, dfGroupBC, "ConstName", "ConstCode")
    #print(values_dictConstB)
    values_dictConstB = prev_wins_const_grouped('Presidential', values_dictConstB)
    #print(values_dictConstB)
    #////////////////////////////////////////////////////////////////////////////////////


    # JUST 2020 CONSTITUENCY INFORMATION UPDATED



    #////////////////////////////////////////////////////////////////////////////////////


     # // (D) Ashanti(Parliament) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Parliament
    first_C_column = dfGroup.columns[dfGroup.columns.str.contains('_C')][0]
    first_rejected_column = dfGroup.columns[dfGroup.columns.str.contains('rejected')][0]
    dfGroup1ACONST2 = dfGroup.loc[:,electoral:first_C_column]
    dfGroup1ACONST2 = dfGroup1ACONST2.drop(columns=first_C_column)
    dfGroup1ACONST2 = dfGroup1ACONST2.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1ACONST2 = dfGroup1ACONST2.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConstCONST2 = dfGroup[["ConstName", "ConstCode", electoral]]
    #dfConstCONST2 = total_valid_votes_levelBased(dfGroup, 'ConstName', 'ConstCode')[1]
    data1ACONST2 = [dfConstCONST2, dfGroup1ACONST2]
    dfMerge1ACONST2 = pd.concat(data1ACONST2, axis=1, join='inner')

    df_cleanC2020modified = dfMerge1ACONST2.loc[:, ~dfMerge1ACONST2.columns.duplicated()]
    df_cleanC2020 = df_cleanC2020modified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC2020 = df_cleanC2020.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC2020[numeric_columnsC2020] = df_cleanC2020[numeric_columnsC2020].apply(pd.to_numeric, errors='coerce')


    # first_rejected_columnC2020 = df_cleanC2020.columns[df_cleanC2020.columns.str.contains('rejected')][0]

    # dfGroupG1ACONST2 = df_cleanC2020.loc[:,first_rejected_columnC2020:]
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.drop(columns=first_rejected_columnC2020)



    # #print(df2)
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.replace(',','', regex=True)
    # dfGroupG1ACONST2 = dfGroupG1ACONST2.apply(pd.to_numeric)
    #df_cleanC2020 = dfMerge1ACONST2.groupby(by="ConstCode")[numeric_columnsC2020].sum().reset_index()



    first_rejected_column3_1ACONST2 = df_cleanC2020.columns[df_cleanC2020.columns.str.contains('rejected')][0]

    graph4AY_3_1ACONST2 = df_cleanC2020.loc[:,first_rejected_column3_1ACONST2:]
    graph4AY_3_1ACONST2 = graph4AY_3_1ACONST2.drop(columns=first_rejected_column3_1ACONST2)
    #print(graph4AY)
    graph4AYes_3_1ACONST2 = graph4AY_3_1ACONST2



    graph3AY_1ACONST2 = df_cleanC2020.iloc[:,4:]
    graph3AX_1ACONST2=df_cleanC2020.ConstName
    columns_to_drop2020 = [col for col in ['rejected_votes', 'valid_votes'] if col in df_cleanC2020.columns]
    df_grouped3zPCONST2 = df_cleanC2020.drop(columns=columns_to_drop2020)
    df_grouped3zPCONST2.fillna(0, inplace=True)
    df_grouped3zPCONST2 = df_grouped3zPCONST2.values.tolist()
    #print(df_grouped3_1A.CONSTITUENCY)

     # Add a new 'values' column containing the highest value for each region
    df_cleanC2020['Values'] = graph4AYes_3_1ACONST2.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC2020['Second_Highest_Value'] = graph4AYes_3_1ACONST2.apply(lambda row: sorted(row)[-2], axis=1)

    def assign_winner(row):
        if row.isna().all() or (row == 0).all():  # Check if all values are NaN or 0
            return "No winner"
        else:
            return row.idxmax()  # Return the party with the highest value (idxmax)

    # Apply the function to each row in the DataFrame to assign the winner
    df_cleanC2020['Winner'] = graph4AYes_3_1ACONST2.apply(assign_winner, axis=1)

    #print(df_cleanC2020['Winner'].value_counts())

    # Counting the number of constituencies won by each party
    party_wins = df_cleanC2020['Winner'].value_counts()
    #print(df_cleanC2020)
    party_wins_dict = party_wins.to_dict()

    const_won_by_party = [{"name": party, "y": count} for party, count in party_wins_dict.items()]
    #print(const_won_by_party)

    names = [item["name"] for item in const_won_by_party]

    count_y = [item["y"] for item in const_won_by_party]


    #print(names)
    #print(count_y)

    #const_won_by_party_data = json.dumps(const_won_by_party)

     # Find the name associated with the second highest value in each row
    def assign_second_highest(row):
        # Check for "No winner" condition (all values are NaN or 0)
        if row.isna().all() or (row == 0).all():  # If all values are NaN or 0
            return "No second place"
        elif row.nunique() == 1:  # If all values are identical (no second place)
            return "No second place"
        else:
            # Drop the max value and return the index of the second-highest
            return row.drop(row.idxmax()).idxmax()

    df_cleanC2020['Second_Highest_Value_Name'] = graph4AYes_3_1ACONST2.apply(assign_second_highest, axis=1)

    # Find the total sum of values in each row
    df_cleanC2020['Total'] = graph4AYes_3_1ACONST2.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC2020['Winner_Percentage'] = (df_cleanC2020['Values'] / df_cleanC2020['Total'] * 100).round(2)

    # Replace NaN values with 'No winner'
    df_cleanC2020['Winner_Percentage'] = df_cleanC2020['Winner_Percentage'].fillna(0)

    # Calculate the percentage of the second highest value
    df_cleanC2020['Second_Highest_Percentage'] = (df_cleanC2020['Second_Highest_Value'] / df_cleanC2020['Total'] * 100).round(2)

    # Replace NaN values with 'No winner'
    df_cleanC2020['Second_Highest_Percentage'] = df_cleanC2020['Second_Highest_Percentage'].fillna(0)

    value_mappingConstACONST2 = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC2020['Values_map'] = df_cleanC2020['Winner'].map(value_mappingConstACONST2)

    values_dictConstACONST2 = df_cleanC2020.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    
    values_dictConstACONST2 = prev_wins_const('Parliamentary', values_dictConstACONST2)

    
    #values_dictConstACONST2ZZ = total_valid_votes_parties_levelBased(dfConstCONST2, dfGroupA, "ConstName", "ConstCode")[0]
    
    # // (D) Ashanti(Presidential) Do Total sum operations for each party on each constituency based on each region for both necessary offices (F) Presidential
    first_C_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('_C')][0]
    first_rejected_column2 = dfGroup2.columns[dfGroup2.columns.str.contains('rejected')][0]
    dfGroup1BCONST2 = dfGroup2.loc[:,electoral:first_C_column2]
    dfGroup1BCONST2 = dfGroup1BCONST2.drop(columns=first_C_column2)
    dfGroup1BCONST2 = dfGroup1BCONST2.loc[:,electoral:].replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
    dfGroup1BCONST2 = dfGroup1BCONST2.apply(pd.to_numeric) # Converting all the string in the columns to integers
    dfConstBCONST2 = dfGroup2[["ConstName", "ConstCode", electoral]]
    dfConst2ZZB = total_valid_votes_levelBased(dfGroup2, 'ConstName', 'ConstCode')[1]
    data1BCONST2 = [dfConstBCONST2, dfGroup1BCONST2]
    dfMerge1BCONST2 = pd.concat(data1BCONST2, axis=1, join='inner')

    df_cleanC2020Bmodified = dfMerge1BCONST2.loc[:, ~dfMerge1BCONST2.columns.duplicated()]
    df_cleanC2020B = df_cleanC2020Bmodified.copy()

    #Ensuring column types are numeric where needed (for summing)
    numeric_columnsC2020B = df_cleanC2020B.columns[2:]  # Adjusting this to my actual range of numeric columns
    df_cleanC2020B[numeric_columnsC2020B] = df_cleanC2020B[numeric_columnsC2020B].apply(pd.to_numeric, errors='coerce')



    # first_rejected_columnC2020B = df_cleanC2020B.columns[df_cleanC2020B.columns.str.contains('rejected')][0]

    # dfGroupG1BCONST2 = df_cleanC2020B.loc[:,first_rejected_columnC2020B:]
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.drop(columns=first_rejected_columnC2020B)



    # #print(df2)
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.replace(',','', regex=True)
    # dfGroupG1BCONST2 = dfGroupG1BCONST2.apply(pd.to_numeric)
    #df_cleanC2020B = dfMerge1BCONST2.groupby(by="ConstCode")[numeric_columnsC2020B].sum().reset_index()


    first_rejected_column3_1BCONST2 = df_cleanC2020B.columns[df_cleanC2020B.columns.str.contains('rejected')][0]

    graph4AY_3_1BCONST2 = df_cleanC2020B.loc[:,first_rejected_column3_1BCONST2:]
    graph4AY_3_1BCONST2 = graph4AY_3_1BCONST2.drop(columns=first_rejected_column3_1BCONST2)
    #print(graph4AY)
    graph4AYes_3_1BCONST2 = graph4AY_3_1BCONST2



    #print(graph4AYes_3_1BCONST2)


    graph3AY_1BCONST2 = df_cleanC2020B.iloc[:,4:]
    graph3AX_1BCONST2=df_cleanC2020B.ConstName
    columns_to_drop2020B = [col for col in ['rejected_votes', 'valid_votes'] if col in df_cleanC2020B.columns]
    df_grouped3zP2CONST2 = df_cleanC2020B.drop(columns=columns_to_drop2020B)
    df_grouped3zP2CONST2.fillna(0, inplace=True)

    df_grouped3zP2CONST2 = df_grouped3zP2CONST2.values.tolist()

     # Adding a new 'values' column containing the highest value for each region
    df_cleanC2020B['Values'] = graph4AYes_3_1BCONST2.apply(max, axis=1)

    # Find the second highest value in each row
    df_cleanC2020B['Second_Highest_Value'] = graph4AYes_3_1BCONST2.apply(lambda row: sorted(row)[-2], axis=1)

    df_cleanC2020B['Winner'] = graph4AYes_3_1BCONST2.apply(assign_winner, axis=1)


    #print(df_cleanC2020B)
     # Find the name associated with the second highest value in each row
    df_cleanC2020B['Second_Highest_Value_Name'] = graph4AYes_3_1BCONST2.apply(assign_second_highest, axis=1)

    # Find the total sum of values in each row
    df_cleanC2020B['Total'] = graph4AYes_3_1BCONST2.sum(axis=1)

    # Calculate the percentage of the highest value
    df_cleanC2020B['Winner_Percentage'] = (df_cleanC2020B['Values'] / df_cleanC2020B['Total'] * 100).round(2)

    # Replace NaN values with 'No winner'
    df_cleanC2020B['Winner_Percentage'] = df_cleanC2020B['Winner_Percentage'].fillna(0)

    # Calculate the percentage of the second highest value
    df_cleanC2020B['Second_Highest_Percentage'] = (df_cleanC2020B['Second_Highest_Value'] / df_cleanC2020B['Total'] * 100).round(2)

    # Replace NaN values with 'No winner'
    df_cleanC2020B['Second_Highest_Percentage'] = df_cleanC2020B['Second_Highest_Percentage'].fillna(0)

    value_mappingConstBCONST2 = {'NPP': 10, 'NDC': 8, 'CPP': 5}

    # Create a new 'colors' column based on the 'Winners' column
    df_cleanC2020B['Values_map'] = df_cleanC2020B['Winner'].map(value_mappingConstBCONST2)

    values_dictConstBCONST2 = df_cleanC2020B.set_index("ConstCode")[["ConstName", "Values_map", "Winner", "Second_Highest_Value_Name", "Winner_Percentage", "Second_Highest_Percentage"]]
    #print(values_dictConstBCONST2)

    #values_dictConstACONST2ZZB = total_valid_votes_parties_levelBased(dfConst2ZZB, dfGroupB, "ConstName", "ConstCode")[0]

    # Check all occurrences of indices and their counts
    # index_counts = values_dictConstBCONST2.index.value_counts()
    # print("Index counts:\n", index_counts)

    # # Further check if any index appears more than once
    # duplicates = index_counts[index_counts > 1]
    # if not duplicates.empty:
    #     print("Duplicate indices with their counts:\n", duplicates)

    # values_dictConstBCONST2 = values_dictConstBCONST2[~values_dictConstBCONST2.index.duplicated(keep='first')]



    values_dictConstBCONST2 = prev_wins_const('Presidential', values_dictConstBCONST2)
    #print("Normal: " , values_dictConstBCONST2)

    #print(values_dictConstBCONST2)
    #global dfGroupH2

     #// List of the header columns
    dfGroupH2 = df.columns.tolist()[5:9]
    dfGroupH3 = df.columns.tolist()[5:9]
    dfGroupH4 = df.columns.tolist()[5:9]
    dfGroupH5 = df.columns.tolist()[5:9]
    # print(dfGroupH2)

    # tSum = dfGroupA[electoral].values.sum().astype(int).tolist()
    # tSum2 = dfGroupB[electoral].values.sum().astype(int).tolist()
    # tSumR = dfGroupAC[electoral].values.sum().astype(int).tolist()
    # tSum2R = dfGroupBC[electoral].values.sum().astype(int).tolist() 
    # graph1AX = dfRegionsSum['RegName'].values.tolist()
    # graph1AY = dfRegionsSum[electoral].values.astype(int).tolist()
    #graphSub1AX = dfConst['ConstName'].values.tolist()
    #graphSub1AY = dfConst['VALID_VOTES'].values.astype(int).tolist() 
    # graph1BX = dfRegionsSum2['RegName'].values.tolist()
    # graph1BY = dfRegionsSum2[electoral].values.astype(int).tolist()
    #graphSub1BX = dfConst1B['ConstName'].values.tolist()
    #graphSub1BY = dfConst1B['VALID_VOTES'].values.astype(int).tolist()  
    graph2AX = tSumC['index'].values.astype(str).tolist()
    graph2AY = tSumC[0].values.astype(int).tolist()
    graph2AXP = tSumCP['index'].values.astype(str).tolist()
    graph2AYP = tSumCP[0].values.astype(int).tolist()
    graph2BXParties = tSumDParties['index'].values.astype(str).tolist()
    graph2BYParties = tSumDParties[0].values.astype(int).tolist()  
    graph2BX = tSumD['index'].values.astype(str).tolist()
    graph2BY = tSumD[0].values.astype(int).tolist()
    graph2BXP = tSumDP['index'].values.astype(str).tolist()
    graph2BYP = tSumDP[0].values.astype(int).tolist() 
    #graph3AY = df_grouped3.iloc[:,1:].values.astype(int).tolist()
    #graph3AX = df_grouped3['RegName'].values.tolist()
    #graph3BY = df_grouped4.iloc[:,1:].values.astype(int).tolist()
    #graph3BX = df_grouped4['RegName'].values.tolist()
    # gapa1AX = gapaSum['YEAR'].values.tolist()
    tSumCA = tSumC.values.tolist()
    tSumDA = tSumD.values.tolist()
    tSumCAP = tSumCP.values.tolist()
    tSumDAP = tSumDP.values.tolist()



    # #_______________________________________


    # #// Parliament year 2016 and below //


    # #______________________________________

    merged_GHMap2A_json = GHMap.merge(values_dict, left_on="region", right_index=True)

    merged_GHMap2A = merged_GHMap2A_json.to_json()


    # #// Presidential year 2016 and below //

    merged2_GHMap2A_json = GHMap.merge(values_dict4, left_on="region", right_index=True)

    merged2_GHMap2A = merged2_GHMap2A_json.to_json()


    # #________________________________________


    # #// Parliament year 2020 and beyond //


    # #______________________________________



    merged_GHMap2_json = GHMap2.merge(values_dict, left_on="region", right_index=True)

    merged_GHMap2 = merged_GHMap2_json.to_json()


    # #// Presidential year 2020 and beyond //

    # #_______________________________________

    merged2_GHMap2_json = GHMap2.merge(values_dict4, left_on="region", right_index=True)

    merged2_GHMap2 = merged2_GHMap2_json.to_json()

    #  #________________________________________


    # #// Constituency Parliament year 2012 to 2020 //


    # #______________________________________


    # Choose constituency code based on the year
    if year == '2012' or year == '2016':
        constchoice = 'ConstCode16_12'
    else:
        constchoice = 'ConstCode'



    merged_GHMap2Const_json = GHMapConst.merge(values_dictConstA, left_on=constchoice, right_index=True)

    merged_GHMap2Const = merged_GHMap2Const_json.to_json()

    

    # Constituency Parliament year 2024

    merged_GHMap2Const_json2024 = GHMapConst2024.merge(values_dictConstA, left_on="ConstCode", right_index=True)

    merged_GHMap2Const2024 = merged_GHMap2Const_json2024.to_json()


    #__________________________________________

    # #// Constituency Parliament year 2004 and 2008 //


    # #______________________________________



    merged_GHMap2Const2_json = GHMapConst2.merge(values_dictConstA, left_on="ConstCode", right_index=True)

    merged_GHMap2Const2 = merged_GHMap2Const2_json.to_json()





    #/////////////////////////////////////////////////////

    # JUST 2012 to 2020 CONSTIYUENCY INFORMATION PARLIAMENT (NOT GRPUPED)

    merged_GHMap2Const_jsonCONST2 = GHMapConst.merge(values_dictConstACONST2, left_on=constchoice, right_index=True)

    merged_GHMap2ConstCONST2 = merged_GHMap2Const_jsonCONST2.to_json()

    # print(merged_GHMap2ConstCONST2)

    # JUST 2024 CONSTITUENCY INFORMATION PARLIAMENT (NOT GRPUPED)

    merged_GHMap2Const_jsonCONST2024 = GHMapConst2024.merge(values_dictConstACONST2, left_on="ConstCode", right_index=True)

    merged_GHMap2ConstCONST2024 = merged_GHMap2Const_jsonCONST2024.to_json()
    


    #/////////////////////////////////////////////////////

    # JUST 2004 and 2008 CONSTIYUENCY INFORMATION PARLIAMENT (NOT GRPUPED)

    merged_GHMap2Const_jsonCONST2_10 = GHMapConst2.merge(values_dictConstACONST2, left_on="ConstCode", right_index=True)

    merged_GHMap2ConstCONST2_10 = merged_GHMap2Const_jsonCONST2_10.to_json()


    #/////////////////////////////////////////////////////

    # #_______________________________________


    # #// Constituency Presidential year 2012 to 2020 //

    # #_______________________________________

    merged2_GHMap2Const_json = GHMapConst.merge(values_dictConstB, left_on=constchoice, right_index=True)

    merged2_GHMap2Const = merged2_GHMap2Const_json.to_json()


    #// Constituency Presidential year 2024 //

    merged2_GHMap2Const_json2024 = GHMapConst2024.merge(values_dictConstB, left_on="ConstCode", right_index=True)

    merged2_GHMap2Const2024 = merged2_GHMap2Const_json2024.to_json()


    # #_______________________________________


    # #// Constituency Presidential year 2004 and 2008 //

    # #_______________________________________

    merged2_GHMap2Const2_json = GHMapConst2.merge(values_dictConstB, left_on="ConstCode", right_index=True)

    merged2_GHMap2Const2 = merged2_GHMap2Const2_json.to_json()

    #print(values_dictConstB)




    #/////////////////////////////////////////////////////

    # JUST 2012 to 2020 CONSTIYUENCY INFORMATION PRESIDENTIAL (NOT GROUPED)

    merged2_GHMap2Const_jsonCONST2 = GHMapConst.merge(values_dictConstBCONST2, left_on=constchoice, right_index=True)

    merged2_GHMap2ConstCONST2 = merged2_GHMap2Const_jsonCONST2.to_json()


    # JUST 2024 CONSTIYUENCY INFORMATION PRESIDENTIAL (NOT GROUPED)

    merged2_GHMap2Const_jsonCONST2024 = GHMapConst2024.merge(values_dictConstBCONST2, left_on="ConstCode", right_index=True)

    merged2_GHMap2ConstCONST2024 = merged2_GHMap2Const_jsonCONST2024.to_json()



    # JUST 2004 and 2008 CONSTIYUENCY INFORMATION PRESIDENTIAL (NOT GROUPED)

    merged2_GHMap2Const_jsonCONST2_10 = GHMapConst2.merge(values_dictConstBCONST2, left_on="ConstCode", right_index=True)

    merged2_GHMap2ConstCONST2_10 = merged2_GHMap2Const_jsonCONST2_10.to_json()

    #//////////////////////////////////////////////////////

    # FLASH_REG ///

    mergedFlashREG_GHMap2_json = GHMap2.merge(flash_REGdf, left_on="region", right_on="RegName")

    mergedFlashREG_GHMap2_json['percentage_PS_affected'] = mergedFlashREG_GHMap2_json['percentage_PS_affected'].round(2)

    mergedFlashREG_GHMap2 = mergedFlashREG_GHMap2_json.to_json()


    # FLASH_CONST ///

    mergedFlashCONST_GHMap2_json = GHMapConst.merge(flash_CONSTdf2020_GROUPED_DONE, left_on=constchoice, right_on="ConstCode")

    mergedFlashCONST_GHMap2 = mergedFlashCONST_GHMap2_json.to_json()

    #print(mergedFlashCONST_GHMap2_json)

    # 2024

    mergedFlashCONST_GHMap2_json2024 = GHMapConst2024.merge(flash_CONSTdf2020_GROUPED_DONE, left_on="ConstCode", right_on="ConstCode")

    mergedFlashCONST_GHMap2024 = mergedFlashCONST_GHMap2_json2024.to_json()

    #/////////////////////////////

    # MERGING 2020 BASED ON NO GROUPING

    mergedFlashCONST_GHMap2_jsonNew = GHMapConst.merge(flash_CONSTdf, left_on=constchoice, right_on="ConstCode")

    mergedFlashCONST_GHMap2New = mergedFlashCONST_GHMap2_jsonNew.to_json()


    # MERGING 2024 BASED ON NO GROUPING

    mergedFlashCONST_GHMap2_jsonNew2024 = GHMapConst2024.merge(flash_CONSTdf, left_on="ConstCode", right_on="ConstCode")

    mergedFlashCONST_GHMap2New2024 = mergedFlashCONST_GHMap2_jsonNew2024.to_json()


    #print(mergedFlashCONST_GHMap2_jsonNew)


    # FLASH_PS /// 

    mergedFlashPS_GHMap2_json = GHMap_PS.merge(flash_PSdf, left_on="PS Code", right_on="PSCode")

    mergedFlashPS_GHMap2 = mergedFlashPS_GHMap2_json.to_json()


    #////////////////////////////////////////////


    # df_winning = graph4AYes_3_1BCONST2

    # # For each row (constituency), finding the party with the highest value
    # df_winning['WinningParty'] = df_winning.idxmax(axis=1)

    # # Counting the number of constituencies won by each party
    # party_wins = df_winning['WinningParty'].value_counts()
    # print(party_wins)





    #________________________________

    #// POPULATION DATA PROCESSING//

    #_______________________________

    def total_cencus(RegName):
       dfGroupA2P = df3[[RegName, census]].copy() # Selecting specific columns and getting rid of the commas in the string
       dfGroupA2P[census] = dfGroupA2P[census].astype('float')
       tSum2P = dfGroupA2P[census].values.sum() # Sum operation on a specific column
       dfContinentSum2P = dfGroupA2P.groupby(by=[RegName])[census].sum().reset_index()
       dfContinentSum2P = dfContinentSum2P.sort_values(by=census, ascending=False)

       return tSum2P, dfContinentSum2P

    # // Finding the Total Pop in relation to the Regions
    # dfGroupA2P = df3[["RegName", census]].copy() # Selecting specific columns and getting rid of the commas in the string
    # dfGroupA2P[census] = dfGroupA2P[census].astype('float') # Converting all the string in the columns to integers
    # tSum2P = dfGroupA2P[census].values.sum() # Sum operation on a specific column
    tSum2P = total_cencus("RegName")[0].astype('float').tolist()
    # dfContinentSum2P = dfGroupA2P.groupby(by=["RegName"])[census].sum().reset_index()
    # dfContinentSum2P = dfContinentSum2P.sort_values(by=census, ascending=False)
    dfContinentSum2P = total_cencus("RegName")[1]
    graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
    graph1AY2P = dfContinentSum2P[census].values.tolist()

    # // Finding the Total Pop in relation to the Districts
    # dfGroupB2P = dfGroup2P[["ConstName", census]].copy() # Selecting specific columns and getting rid of the commas in the string
    # dfGroupB2P[census] = dfGroupB2P[census].astype('float') # Converting all the string in the columns to integers
    # tSumB2P = dfGroupB2P[census].values.sum() # Sum operation on a specific column
    tSumB2P = total_cencus("ConstName")[0].astype('float').tolist()
    # dfContinentSumB2P = dfGroupB2P.groupby(by=["ConstName"])[census].sum().reset_index()
    # dfContinentSumB2P = dfContinentSumB2P.sort_values(by=census, ascending=False)
    dfContinentSumB2P = total_cencus("ConstName")[1]
    graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
    graph1BY2P = dfContinentSumB2P[census].values.tolist()

    #// List of the header columns
    dfGroupH = df3.columns.tolist()[8:-1]

    # tSum2P = dfGroupA2P[census].values.sum().astype('float').tolist()
    # graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
    # graph1AY2P = dfContinentSum2P[census].values.tolist()

    # tSumB2P = dfGroupB2P[census].values.sum().astype('float').tolist()
    # graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
    # graph1BY2P = dfContinentSumB2P[census].values.tolist()


    context = {
    'tSum' : tSum,
    'tSum2' : tSum2,
    'tSumR' : tSumR,
    'tSum2R' : tSum2R,
    'tSumCA' : tSumCA,
    'tSumDA' : tSumDA,
    'tSumCAP' : tSumCAP,
    'tSumDAP' : tSumDAP,
    'df_grouped3z' : df_grouped3z,
    'df_grouped4z' : df_grouped4z,
    'df_grouped3zP' : df_grouped3zP,
    'df_grouped3zP2' : df_grouped3zP2,
    'graph1AX' : graph1AX,
    'graph1AY' : graph1AY,
    'graphSub1AX' : graphSub1AX,
    'graphSub1AY' : graphSub1AY,
    'graph1BX' : graph1BX,
    'graph1BY' : graph1BY,
    'graphSub1BX' : graphSub1BX,
    'graphSub1BY' : graphSub1BY,
    'graph2AX' : graph2AX,
    'graph2AY' : graph2AY,
    'graph2AXP' : graph2AXP,
    'graph2AYP' : graph2AYP,
    'graph2BX' : graph2BX,
    'graph2BY' : graph2BY,
    'graph2BXP' : graph2BXP,
    'graph2BYP' : graph2BYP,
    'graph3AX' : graph3AX,
    'graph3BX' : graph3BX,
    'tSum2P' : tSum2P,
    'tSumB2P' : tSumB2P,
    'graph1AX2P' : graph1AX2P,
    'graph1AY2P' : graph1AY2P,
    'graph1BX2P' : graph1BX2P,
    'graph1BY2P' : graph1BY2P,
    'dfGroupH' : dfGroupH,
    'dfGroupH2' : dfGroupH2,
    'dfGroupH3' : dfGroupH3,
    'dfGroupH4' : dfGroupH4,
    'dfGroupH5' : dfGroupH4,
    'merged_GHMap2A' : merged_GHMap2A,
    'merged2_GHMap2A' : merged2_GHMap2A,
    'merged_GHMap2' : merged_GHMap2,
    'merged2_GHMap2' : merged2_GHMap2,
    'merged_GHMap2Const' : merged_GHMap2Const,
    'merged2_GHMap2Const' : merged2_GHMap2Const,
    'merged_GHMap2ConstCONST2' : merged_GHMap2ConstCONST2,
    'merged2_GHMap2ConstCONST2' : merged2_GHMap2ConstCONST2,
    'mergedFlashREG_GHMap2': mergedFlashREG_GHMap2,
    'mergedFlashCONST_GHMap2' : mergedFlashCONST_GHMap2,
    'mergedFlashCONST_GHMap2New' : mergedFlashCONST_GHMap2New,
    'mergedFlashPS_GHMap2': mergedFlashPS_GHMap2,
    #'const_won_by_party_data' : const_won_by_party_data,
    'names' : names,
    'count_y' : count_y,
    'graph2BXParties' : graph2BXParties,
    'graph2BYParties' : graph2BYParties,
    'merged_GHMap2Const2' : merged_GHMap2Const2,
    'merged2_GHMap2Const2' : merged2_GHMap2Const2,
    'merged_GHMap2ConstCONST2_10' : merged_GHMap2ConstCONST2_10,
    'merged2_GHMap2ConstCONST2_10' : merged2_GHMap2ConstCONST2_10,
    'GHMap2_json': GHMap2_json,
    'GHMap_json': GHMap_json,
    'GHMap_PS_json': GHMap_PS_json,
    'merged_GHMap2Const2024': merged_GHMap2Const2024,
    'merged_GHMap2ConstCONST2024': merged_GHMap2ConstCONST2024,
    'merged2_GHMap2Const2024': merged2_GHMap2Const2024,
    'merged2_GHMap2ConstCONST2024': merged2_GHMap2ConstCONST2024,
    'mergedFlashCONST_GHMap2024' : mergedFlashCONST_GHMap2024,
    'mergedFlashCONST_GHMap2New2024': mergedFlashCONST_GHMap2New2024,
    
    }


    return context  

# Map
@login_required(login_url='login')                     
def map(request):
    data = initialise_chart()
    # data['m'] = m
    return render(request, 'map.html', data)


def SignupPage(request):
    if request.method == 'POST':
        uname = request.POST.get('username')
        email = request.POST.get('email')
        pass1 = request.POST.get('password1')
        pass2 = request.POST.get('password2')

        if pass1 != pass2:
            messages.error(request, "Your password and confirm password are not the same!")
            return redirect('signup')  # Redirect back to the signup page
        else:
            # Check if username already exists
            if User.objects.filter(username=uname).exists():
                messages.error(request, "Username already exists!")
                return redirect('signup')

            # Create and save the user
            my_user = User.objects.create_user(uname, email, pass1)
            my_user.save()
            messages.success(request, "Account created successfully!")
            return redirect('login')

    return render(request, 'signup.html')

def LoginPage(request):
    if request.method=='POST':
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        user=authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('map')
        else:
            messages.error(request, "Username or Password is incorrect!!!")
            return redirect('login')  

    return render (request,'login.html')

def LogoutPage(request):
    logout(request)
    return redirect('login')

# Routes
@login_required(login_url='login') 
def my_routing(request):

    context = {
    'GHMap2_json' : GHMap2_json,
    'GHMap_PS_json' : GHMap_PS_json
    }
    
    return render(request, 'index.html', context)



@login_required(login_url='login') 
def update_charts(request):
    
    #RT
    # from .tasks import update_year_2024_data

    # update_year_2024_data.delay()

    selected_year = request.GET.get("year")
    selected_region = request.GET.get("region")
    selected_census = request.GET.get('census')
    selected_electoral = request.GET.get('electoral')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{selected_year}_{selected_region}_{selected_census}_{selected_electoral}".replace(" ", "_")
    cache_hit = False  # Initialize flag to indicate if cache is used

    # Check if data is already cached, only for years other than 2024
    data = None
    if selected_year != "2024":
        data = cache.get(cache_key)
        if data:
            cache_hit = True  # Data is from cache

    if not data:
        # Data not in cache, perform the data processing
        if selected_year and not selected_region and not selected_census and not selected_electoral:
            # Case 1: Filter by Year only
            data = initialise_chart(year=selected_year)
        elif selected_census and not selected_year and not selected_region and not selected_electoral:
        #     # Case 3: Filter by Census only
            data = initialise_chart(census=selected_census)
        elif selected_electoral and not selected_year and not selected_region and not selected_census:
            # Case 4: Filter by Electoral only
            data = initialise_chart(electoral=selected_electoral)
        elif selected_year and selected_census and not selected_region and not selected_electoral:
            # Combination: Year and Census
            data = initialise_chart(year=selected_year, census=selected_census)
        elif selected_year and selected_electoral and not selected_region and not selected_census:
            # Combination: Year and Electoral
            data = initialise_chart(year=selected_year, electoral=selected_electoral)
        elif selected_region and not selected_year and not selected_census and not selected_electoral:
            # Case 2: Filter by Region only
            data = initialise_chart(region=selected_region)
        elif selected_year and selected_region and not selected_census and not selected_electoral:
            # Combination: Year and Region
            data = initialise_chart(year=selected_year, region=selected_region)
        else:
            data = initialise_chart()

        # elif selected_region and not selected_year and not selected_census and not selected_electoral:
        #     # Case 2: Filter by Region only
        #     data = initialise_chart(region=selected_region)

        # elif selected_census and not selected_year and not selected_region and not selected_electoral:
        #     # Case 3: Filter by Census only
        #     data = initialise_chart(census=selected_census)
       
        # elif selected_electoral and not selected_year and not selected_region and not selected_census:
        #     # Case 4: Filter by Electoral only
        #     data = initialise_chart(electoral=selected_electoral)
      
        # # elif selected_year and selected_region and not selected_census and not selected_electoral:
        # #     # Combination: Year and Region
        # #     data = initialise_chart(year=selected_year, region=selected_region)
        
        # elif selected_year and selected_census and not selected_region and not selected_electoral:
        #     # Combination: Year and Census
        #     data = initialise_chart(year=selected_year, census=selected_census)
        
        # elif selected_year and selected_electoral and not selected_region and not selected_census:
        #     # Combination: Year and Electoral
        #     data = initialise_chart(year=selected_year, electoral=selected_electoral)
        
        # # elif selected_region and selected_census and not selected_year and not selected_electoral:
        # #     # Combination: Region and Census
        # #     data = initialise_chart(region=selected_region, census=selected_census)
        
        # # elif selected_region and selected_electoral and not selected_year and not selected_census:
        # #     # Combination: Region and Electoral
        # #     data = initialise_chart(region=selected_region, electoral=selected_electoral)
        
        # elif selected_census and selected_electoral and not selected_year and not selected_region:
        #     # Combination: Census and Electoral
        #     data = initialise_chart(census=selected_census, electoral=selected_electoral)
        
        # elif selected_year and selected_region and selected_census and selected_electoral:
        #     # Combination: All filters
        #     data = initialise_chart(year=selected_year, region=selected_region, census=selected_census, electoral=selected_electoral)
        
        if selected_year != "2024":
            cache.set(cache_key, data, timeout=60 * 15)  # Cache for 15 minutes

    # Include the cache_hit flag in the response
    response_data = {
        "data": data,
        "cache_hit": cache_hit
    }

    return JsonResponse(response_data, safe=False)



@login_required(login_url='login') 
def selectCensus(request):
    census = request.GET.get('census')
    year = request.GET.get('year')
    region = request.GET.get('region')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{year}_{region}_{census}".replace(" ", "_")
    cache_hit = False  # Initialize flag to indicate if cache is used


    # Check if data is already cached
    data = cache.get(cache_key)
    if data:
            cache_hit = True  # Data is from cache

    if not data:
        # Data not in cache, perform the data processing
        # filename3 = f'District_pop_demographics{year}.csv'
        # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
        # df3 = gpd.read_file(path3)
        
        grouped2P = df3.groupby(['RegName'])
        dfGroup2P = grouped2P.get_group(region) 

        def total_cencus(RegName):
           dfGroupA2P = df3[[RegName, census]].copy() # Selecting specific columns and getting rid of the commas in the string
           dfGroupA2P[census] = dfGroupA2P[census].astype('float')
           tSum2P = dfGroupA2P[census].values.sum() # Sum operation on a specific column
           dfContinentSum2P = dfGroupA2P.groupby(by=[RegName])[census].sum().reset_index()
           dfContinentSum2P = dfContinentSum2P.sort_values(by=census, ascending=False)

           return tSum2P, dfContinentSum2P

        # POPULATION DATA PROCESSING
        # dfGroupA2P = df3[["RegName", census]].copy()
        # dfGroupA2P[census] = dfGroupA2P[census].astype('float')
        # tSum2P = dfGroupA2P[census].values.sum()
        tSum2P = total_cencus("RegName")[0].astype('float').tolist()
        # dfContinentSum2P = dfGroupA2P.groupby(by=["RegName"])[census].sum().reset_index()
        # dfContinentSum2P = dfContinentSum2P.sort_values(by=census, ascending=False)
        dfContinentSum2P = total_cencus("RegName")[1]
        graph1AX2P = dfContinentSum2P['RegName'].values.tolist()
        graph1AY2P = dfContinentSum2P[census].values.tolist()

        # dfGroupB2P = dfGroup2P[["ConstName", census]].copy()
        # dfGroupB2P[census] = dfGroupB2P[census].astype('float')
        # tSumB2P = dfGroupB2P[census].values.sum()
        tSumB2P = total_cencus("ConstName")[0].astype('float').tolist()
        # dfContinentSumB2P = dfGroupB2P.groupby(by=["ConstName"])[census].sum().reset_index()
        # dfContinentSumB2P = dfContinentSumB2P.sort_values(by=census, ascending=False)
        dfContinentSumB2P = total_cencus("ConstName")[1]
        graph1BX2P = dfContinentSumB2P['ConstName'].values.tolist()
        graph1BY2P = dfContinentSumB2P[census].values.tolist()

        #dfGroupH = df3.columns.tolist()[8:-1]

        context = {
            'tSum2P' : tSum2P,
            'tSumB2P' : tSumB2P,
            'graph1AX2P' : graph1AX2P,
            'graph1AY2P' : graph1AY2P,
            'graph1BX2P' : graph1BX2P,
            'graph1BY2P' : graph1BY2P,
            
        }

        # Store the result in the cache for future use
        cache.set(cache_key, context, timeout=60*15)  # Cache for 15 minutes
    else:
        # Data is already cached, use the cached data
        context = data

    # Include the cache_hit flag in the response
    response_data = {
        "context": context,
        "cache_hit": cache_hit
    }

    return JsonResponse(response_data, safe=False)



# ////////////////////////////////////////////////////////////////////////


# TACKLING THE VARIOUS INDIVIDUAL DROPDOWNS ASIDE POPULATION DEMOGRAPHICS

# ////////////////////////////////////////////////////////////////////////

# (1) Chart 1
@login_required(login_url='login') 
def selectElectoral1(request):
    electoral = request.GET.get('electoral')
    year = request.GET.get('year')
    region = request.GET.get('region')

    # Generate a unique cache key based on the filter parameters
    cache_key = f"data_{year}_{region}_{electoral}".replace(" ", "_")
    cache_hit = False  # Initialize flag to indicate if cache is used



    # Check if data is already cached, only for years other than 2024
    context = None
    if year != "2024":
        context = cache.get(cache_key)
        if context:
            cache_hit = True  # Data is from cache

    if not context:
        # Data not in cache, perform the data processing
        # filename3 = f'District_pop_demographics{year}.csv'
        # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
        # df3 = gpd.read_file(path3)
        # if year == '2024':
        #     df = df2024
        # elif year == '2016':
        #     df = df2016
        # elif year == '2012':
        #     df = df2012
        # elif year == '2008':
        #     df = df2008
        # else:
        #     df = df2020
        
        # grouped = df.groupby(['year_', 'office'])
        # dfGroup = grouped.get_group((year, 'Parliament'))

        groupedNewA = df.groupby(['year_', 'office', 'RegName'])
        dfGroupNew1 = groupedNewA.get_group((year, 'Parliamentary', region))

        groupedNewA = df.groupby(['year_', 'office', 'RegName'])
        dfGroupNew1B = groupedNewA.get_group((year, 'Presidential', region))


        # dfRegions = dfGroup[["RegName", electoral]].copy()
        # dfRegions[electoral] = dfRegions[electoral].replace(',','', regex=True)
        # dfRegions[electoral] = dfRegions[electoral].astype('int')
        # dfRegionsSum = dfRegions.groupby(by=["RegName"])[electoral].sum().reset_index()
        # graph1AX = dfRegionsSum['RegName'].values.tolist()
        # graph1AY = dfRegionsSum[electoral]
        # graph1AX = dfRegionsSum['RegName'].values.tolist()
        # graph1AY = dfRegionsSum[electoral].values.astype(int).tolist()

        def total_valid_votes_levelBased(dfGroupNew1):
            dfConst = dfGroupNew1[["ConstName", electoral]].copy()
            dfConst[electoral] = dfConst[electoral].replace(',','', regex=True)
            dfConst[electoral] = dfConst[electoral].astype('int')
            dfConst = dfConst.sort_values(by=electoral, ascending=False)

            return dfConst

        def total_valid_votes_levelBased2(dfGroupNew1):
            first_C_column1 = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('_C')][0]
            dfGroupCP = dfGroupNew1.loc[:,'NPP':first_C_column1]
            dfGroupCP = dfGroupCP.drop(columns=first_C_column1)
            dfGroupCP = dfGroupCP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
            dfGroupCP = dfGroupCP.apply(pd.to_numeric) # Converting all the string in the columns to integers
            tSumCP = dfGroupCP.sum().reset_index()

            return tSumCP

        # dfConst = dfGroupNew1[["ConstName", electoral]].copy()
        # dfConst[electoral] = dfConst[electoral].replace(',','', regex=True)
        # dfConst[electoral] = dfConst[electoral].astype('int')
        # dfConst = dfConst.sort_values(by=electoral, ascending=False)
        dfConst = total_valid_votes_levelBased(dfGroupNew1)
        graphSub1AX = dfConst['ConstName'].values.tolist()
        graphSub1AY = dfConst[electoral].values.astype(int).tolist()



        # dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
        # dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
        # dfConst1B[electoral] = dfConst1B[electoral].astype('int')
        # dfConst1B = dfConst1B.sort_values(by=electoral, ascending=False)
        dfConst1B = total_valid_votes_levelBased(dfGroupNew1B)
        graphSub1BX = dfConst1B['ConstName'].values.tolist()
        graphSub1BY = dfConst1B[electoral].values.astype(int).tolist()



        # // Do Total sum operations for each party on Parliament CONSTITUENCY (C)
        # first_C_column1 = dfGroupNew1.columns[dfGroupNew1.columns.str.contains('_C')][0]
        # dfGroupCP = dfGroupNew1.loc[:,'NPP':first_C_column1]
        # dfGroupCP = dfGroupCP.drop(columns=first_C_column1)
        # dfGroupCP = dfGroupCP.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        # dfGroupCP = dfGroupCP.apply(pd.to_numeric) # Converting all the string in the columns to integers
        # tSumCP = dfGroupCP.sum().reset_index() # Sum operation on a specific column
        tSumCP = total_valid_votes_levelBased2(dfGroupNew1)
        graph2AXP = tSumCP['index'].tolist()
        graph2AYP = tSumCP[0]
        
        
        # // Do Total sum operations for each party on Presidential CONSTITUENCY (C)
        # first_C_column1B = dfGroupNew1B.columns[dfGroupNew1B.columns.str.contains('_C')][0]
        # dfGroupDP = dfGroupNew1B.loc[:,'NPP':first_C_column1B]
        # dfGroupDP = dfGroupDP.drop(columns=first_C_column1B)
        # dfGroupDP = dfGroupNew1B.replace(',','', regex=True) # Selecting specific columns and getting rid of the commas in the string
        # dfGroupDP = dfGroupDP.apply(pd.to_numeric) # Converting all the string in the columns to integers
        # tSumDP = dfGroupDP.sum().reset_index() # Sum operation on a specific column
        tSumDP = total_valid_votes_levelBased2(dfGroupNew1B)
        graph2BXP = tSumDP['index']
        graph2BYP = tSumDP[0]

        tSumCAP = tSumCP.values.tolist()
        tSumDAP = tSumDP.values.tolist()


        context = {
            # 'graph1AX' : graph1AX,
            # 'graph1AY' : graph1AY,
            'graphSub1AX' : graphSub1AX,
            'graphSub1AY' : graphSub1AY,
            'graphSub1BX' : graphSub1BX,
            'graphSub1BY' : graphSub1BY,
            'tSumCAP' : tSumCAP,
            'tSumDAP' : tSumDAP,
        
        }

        # Store the result in the cache only if the year is not 2024
        if year != "2024":
            cache.set(cache_key, context, timeout=60 * 15)  # Cache for 15 minutes

    # Include the cache_hit flag in the response
    response_data = {
        "context": context,
        "cache_hit": cache_hit
    }

    return JsonResponse(response_data, safe=False)


# (3) Chart 2

# def selectElectoral2(request):
#     electoral = request.GET.get('electoral')
#     year = request.GET.get('year')
#     region = request.GET.get('region')

#     # Generate a unique cache key based on the filter parameters
#     cache_key2 = f"data_{year}_{region}_{electoral}"

#     # Check if data is already cached
#     data2 = cache.get(cache_key2)

#     if not data2:
#         # Data not in cache, perform the data processing
#         # filename3 = f'District_pop_demographics{year}.csv'
#         # path3 = os.path.join('path_to_your_data_directory', 'EDATA', filename3)
#         # df3 = gpd.read_file(path3)
#         # if year == '2024':
#         #     df = df2024
#         # elif year == '2016':
#         #     df = df2016
#         # elif year == '2012':
#         #     df = df2012
#         # elif year == '2008':
#         #     df = df2008
#         # else:
#         #     df = df2020

#         # grouped = df.groupby(['year_', 'office'])
#         # dfGroup2 = grouped.get_group((year, 'Presidential First Round'))
#         groupedNewA = df.groupby(['year_', 'office', 'RegName'])
#         dfGroupNew1B = groupedNewA.get_group((year, 'Presidential First Round', region))



#         # dfRegions2 = dfGroup2[["RegName", electoral]].copy()
#         # dfRegions2[electoral] = dfRegions2[electoral].replace(',','', regex=True)
#         # dfRegions2[electoral] = dfRegions2[electoral].astype('int')
#         # dfRegionsSum2 = dfRegions2.groupby(by=["RegName"])[electoral].sum().reset_index()
#         # graph1BX = dfRegionsSum2['RegName']
#         # graph1BY = dfRegionsSum2[electoral]
#         # graph1BX = dfRegionsSum2['RegName'].values.tolist()
#         # graph1BY = dfRegionsSum2[electoral].values.astype(int).tolist()


#         dfConst1B = dfGroupNew1B[["ConstName", electoral]].copy()
#         dfConst1B[electoral] = dfConst1B[electoral].replace(',','', regex=True)
#         dfConst1B[electoral] = dfConst1B[electoral].astype('int')
#         graphSub1BX = dfConst1B['ConstName'].values.tolist()
#         graphSub1BY = dfConst1B[electoral].values.astype(int).tolist()
        

#         context = {
#             # 'graph1BX' : graph1BX,
#             # 'graph1BY' : graph1BY,
#             'graphSub1BX' : graphSub1BX,
#             'graphSub1BY' : graphSub1BY,
            
#         }

#         # Store the result in the cache for future use
#         cache.set(cache_key2, context, timeout=60*15)  # Cache for 15 minutes
#     else:
#         # Data is already cached, use the cached data
#         context = data2

#     return JsonResponse(context, safe=False)




   
